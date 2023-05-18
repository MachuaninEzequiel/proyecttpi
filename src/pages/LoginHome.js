//import { Login1 } from "../components/index";
import React from "react";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";

const normalCredentials = {
  firstName: "test",
  lastName: "test",
  email: "test@test",
  password: "test",
  isAdmin: false,
};

function validateCredentials(credentials) {
  return (
    credentials[0].value === normalCredentials.firstName &&
    credentials[1].value === normalCredentials.lastName &&
    credentials[2].value === normalCredentials.email &&
    credentials[3].value === normalCredentials.password
  );
}

const LoginHome = () => {
  const navigate = useNavigate();

  const adminContext = useContext(Context);

  const handleSubmit = (e, values) => {
    e.preventDefault();
    if (validateCredentials(e.target)) {
      localStorage.setItem("username", e.target[0].value);
      localStorage.setItem("isAdmin", JSON.stringify(true));
      adminContext?.setIsAdmin(true);
      navigate("Clientes");
    }
  };

  return (
    <>
      <section class="text-center text-lg-start">
        <div class="container py-4">
          <div class="row g-0 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card cascading-right cardbg ">
                <div class="card-body p-5 shadow-5 text-center">
                  <h2 class="fw-bold mb-5">Sign up now</h2>
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Example1"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example1">
                            First name
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Example2"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example2">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        class="form-control"
                      />
                      <label class="form-label" for="form3Example3">
                        Email address
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        class="form-control"
                      />
                      <label class="form-label" for="form3Example4">
                        Password
                      </label>
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary btn-block mb-4"
                    >
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-lg-5 mb-4 mt-4 mb-lg-0">
              <img
                src="https://png.pngtree.com/background/20210710/original/pngtree-garbage-classification-recycling-picture-image_1039212.jpg"
                class="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginHome;
