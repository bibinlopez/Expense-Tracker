import axios from "axios";
import { LogIn, UserPlus, IndianRupee } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const url = `${import.meta.env.VITE_BASE_API_URL}/auth`;

  const handleSubmit = async (e) => {
    setEmail("");
    setPassword("");
    setLoading(true);
    try {
      const response = await axios.post(url, {
        email,
        password,
      });
      console.log({ response });

      const token = response?.data?.token;
      const user = response?.data?.user;

      if (token) {
        localStorage.setItem("accessToken", token);
      }
      if (user) {
        localStorage.setItem("name", user);
        localStorage.setItem("userId", user.id);
      }
      toast.success(
        response?.data.message
          ? response.data.message
          : "User Logged-In Successfully"
      );
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong !!!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex  justify-center p-4">
      <div className="w-full max-w-md pt-20">
        {/* Logo*/}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <IndianRupee className="w-7 h-6 text-white" />
          </div>
          <h1 className="text-gray-900">Expense Tracker</h1>
          <p className="text-gray-600 mt-2">
            Track your spending and manage your budget
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex border-b border-gray-200">
            <div
              className={`flex-1 px-6 py-4 transition-colors bg-blue-50 text-blue-600 border-b-  border-blue-600`}
            >
              <div className="flex items-center justify-center gap-2">
                <LogIn className="w-4 h-4" />
                <span>Log In</span>
                <span className="text-gray-500">/</span>
                <UserPlus className="w-4 h-4" />
                <span>Sign Up</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="login-email"
                  className="block mb-2 text-gray-700"
                >
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="login-password"
                  className="block mb-2 text-gray-700"
                >
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
