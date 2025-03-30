import { React, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";

const Header = () => {
  // ✅ Fix: Ensure user is either an object or null
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      return null;
    }
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(user);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log("Login Error:", error),
  });

  const GetUserProfile = async (tokenInfo) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      );

      console.log("User Info:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      setUser(response.data); // ✅ Update user state
      setOpenDialog(false);   // ✅ Close login popup automatically
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <img src="/logo.svg" alt="Logo" />
      <div>
        {user ? (
          <div className="flex gap-5 items-center">
            <Button variant="outline" className="rounded-full">My Trip</Button>

            {/* Popover for User Dropdown */}
            <Popover>
              <PopoverTrigger>
                {/* ✅ Use user?.picture, fallback to default image */}
                <img
                  src="/user.jpg"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  alt="User Profile"
                />
              </PopoverTrigger>
              <PopoverContent className="w-40">
                <h2
                  className="cursor-pointer text-red-600 font-semibold"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    setUser(null); // ✅ Update user state after logout
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign in</Button>
        )}
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="Logo" />
              <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
              <p>Sign into the app securely using Google authentication.</p>
              <Button
                disabled={loading}
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                Sign In With Google <FcGoogle className="h-7 w-7" />
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Header;
