import Link from 'next/link';
import { TextInput, Checkbox } from '../ui/Inputs';

export default function EnquiryForm() {
  return (
    <div className="w-full md:w-1/2">
      <div className="flex flex-col items-center justify-center sm:selection:px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" action="#">
              <Link
                href="/"
                className="flex items-center mb-6 text-xl font-semibold text-gray-900 dark:text-white"
              >
                ENQUIRY FORM
              </Link>
              <div className="flex gap-6">
                <TextInput
                  placeholder="First Name"
                  label="First Name"
                  name="firstName"
                  id="firstName"
                  type="text"
                />
                <TextInput
                  placeholder="Last Name"
                  label="Last Name"
                  name="lastName"
                  id="lastName"
                  type="text"
                />
              </div>
              <TextInput
                placeholder="name@company.com"
                label="Email"
                name="email"
                id="email"
                type="email"
              />
              <TextInput
                placeholder="+91 1234567890"
                label="Phone Number"
                name="phoneNumber"
                id="phoneNumber"
                type="tel"
              />
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="services"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Please select the service(s) you need:
                </label>
                <Checkbox id="" label="Precision & Farm Automation" />
                <Checkbox id="" label="Outdoor Faming" />
                <Checkbox id="" label="Indoor Farming" />
                <Checkbox id="" label="Setup Farm" />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
