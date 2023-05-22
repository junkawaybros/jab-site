"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string(),
  email: yup
    .string()
    .email("Invalid email address.")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number is not valid."),
  message: yup.string().required("Message is required"),
  zipCode: yup
    .string()
    .required("Zip code is required")
    .matches(
      /^\d{5}(-\d{4})?$/,
      "ZIP code is not valid. It should be in the format 12345 or 12345-6789."
    ),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data: any) => {
    axios.post("https://formspree.io/f/xyyavaod", data);
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        zipCode: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form
      id="contact-form"
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="firstName"
                autoComplete="given-name"
                placeholder="John"
                className={`block w-full rounded-md border-0 px-3.5 py-2 sm:text-sm sm:leading-6 ${
                  errors.firstName
                    ? `text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500`
                    : `text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500`
                }`}
                {...register("firstName", {})}
              />
            </div>

            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ message }) => (
                <p className="mt-2 text-sm text-red-600">{message}</p>
              )}
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="lastName"
                autoComplete="family-name"
                placeholder="Doe"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                {...register("lastName", {})}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="johndoe@example.com"
                className={`block w-full rounded-md border-0 px-3.5 py-2 sm:text-sm sm:leading-6 ${
                  errors.email
                    ? `text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500`
                    : `text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500`
                }`}
                {...register("email", {})}
              />
            </div>

            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {message}
                </p>
              )}
            />
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                id="phoneNumber"
                autoComplete="tel"
                placeholder="555-555-5555"
                className={`block w-full rounded-md border-0 px-3.5 py-2 sm:text-sm sm:leading-6 ${
                  errors.phoneNumber
                    ? `text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500`
                    : `text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500`
                }`}
                {...register("phoneNumber", {})}
              />
            </div>

            <ErrorMessage
              errors={errors}
              name="phoneNumber"
              render={({ message }) => (
                <p className="mt-2 text-sm text-red-600">{message}</p>
              )}
            />
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="zipCode"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Zip code
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="zipCode"
                placeholder="80015"
                autoComplete="postal-code"
                className={`block w-full rounded-md border-0 px-3.5 py-2 sm:text-sm sm:leading-6 ${
                  errors.zipCode
                    ? `text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500`
                    : `text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500`
                }`}
                {...register("zipCode", {})}
              />
            </div>
            <ErrorMessage
              errors={errors}
              name="zipCode"
              render={({ message }) => (
                <p className="mt-2 text-sm text-red-600">{message}</p>
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                rows={4}
                placeholder="I would like to have a refrigerator and a sofa removed from my property."
                className={`block w-full rounded-md border-0 px-3.5 py-2 sm:text-sm sm:leading-6 ${
                  errors.message
                    ? `text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500`
                    : `text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500`
                }`}
                defaultValue={""}
                {...register("message", {})}
              />
            </div>
            <ErrorMessage
              errors={errors}
              name="message"
              render={({ message }) => (
                <p className="mt-2 text-sm text-red-600">{message}</p>
              )}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-teal-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition duration-300 ease-in-out hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
          >
            Send message
          </button>
        </div>
      </div>
    </form>
  );
}
