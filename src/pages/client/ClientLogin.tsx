
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import ParticleAnimation from "@/components/ui/particle-animation";

const ClientLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  // Email validation
  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle email change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
    if (e.target.value) {
      setIsEmailValid(validateEmail(e.target.value));
    } else {
      setIsEmailValid(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Client login:", formData);
  };

  return (
    <div className="login-container light">
      <canvas id="particles" className="particles-canvas"></canvas>
      <ParticleAnimation />

      <div className="login-card">
        <div className="login-card-inner">
          <div className="login-header">
            <h1>Employer Sign In</h1>
            <p>Access your hiring dashboard</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div
              className={`form-field ${
                isEmailFocused || formData.email ? "active" : ""
              } ${!isEmailValid && formData.email ? "invalid" : ""}`}
            >
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleEmailChange}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                required
              />
              <label htmlFor="email">Company Email</label>
              {!isEmailValid && formData.email && (
                <span className="error-message">
                  Please enter a valid email
                </span>
              )}
            </div>

            <div
              className={`form-field ${
                isPasswordFocused || formData.password ? "active" : ""
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                required
              />
              <label htmlFor="password">Password</label>
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button type="submit" className="login-button">
              Sign In to Dashboard
            </button>
          </form>

          <div className="mt-6 space-y-4 text-center">
            <Link to="/client/forgot-password" className="forgot-password block">
              Forgot your password?
            </Link>
            <p className="signup-prompt">
              Don't have an employer account?{" "}
              <Link to="/client/register">
                Create one here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
