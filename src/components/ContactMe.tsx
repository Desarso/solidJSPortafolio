import { createSignal } from "solid-js";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [subject, setSubject] = createSignal("");
  const [message, setMessage] = createSignal("");

  //   const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = () => {
    window.location.href = `mailto:malek.gabriel33@gmail.com?subject=${subject()}&body=Hi, my name is ${name()}.%0D%0A %0D%0A
        ${message()} %0D%0A%0D%0A
        You can reach me at ${email()}`;
  };

  return (
    <div
      class="h-screen flex flex-col relative md:text-left md:flex-row
      max-w-7xl justify-evenly mx-auto items-center "
    >
      <h3 class="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div class="flex= flex-col space-y-10 contact-me mt-12">
        <h4 class="sm-display-none text-4xl font-semibold text-center">
          Let&apos;s work together
          <span class="decoration-[#F7AB0A]/50 underline"></span>
        </h4>

        <div class="space-y-2 contact-info ">
          <div class="flex items-center space-x-5 justify-center">
            <svg
              class="h-7 text-[#F7AB0A] animate-pulse"
              data-darkreader-inline-stroke=""
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              ></path>
            </svg>
            <p class="text-gray-500 text-2xl">+1 {"(978)"} 873-0012</p>
          </div>
          <div class="flex items-center space-x-5 justify-center">
            {/* <EnvelopeIcon class="h-7 text-[#F7AB0A] animate-pulse" /> */}
            <svg
              class="h-7 text-[#F7AB0A] animate-pulse"
              data-darkreader-inline-stroke=""
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              ></path>
            </svg>
            <p class="text-gray-500 text-2xl">malek.gabriel33@gmail.com</p>
          </div>
          <div class="flex items-center space-x-5 justify-center">
            <svg
              class="h-7 text-[#F7AB0A] animate-pulse "
              data-darkreader-inline-stroke=""
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              ></path>
            </svg>
            <p class="text-gray-500 text-2xl">Sacramento</p>
          </div>

          <form
            onSubmit={onSubmit}
            class="flex flex-col space-y-2 mx-auto max-w-[100vw]"
          >
            <div class="flex name-email-container space-x-2">
              <input
                onInput={(e) => setName(e.currentTarget.value)}
                placeholder="Name"
                class="contactInput name-field"
                type="text"
              />
              <input
                onInput={(e) => setEmail(e.currentTarget.value)}
                placeholder="Email"
                class="contactInput email-field"
                type="email"
              />
            </div>
            <input
              onInput={(e) => setSubject(e.currentTarget.value)}
              placeholder="Subject"
              class="contactInput"
              type="text"
            />
            <textarea
              onInput={(e) => setMessage(e.currentTarget.value)}
              placeholder="Message"
              class="contactInput"
            />
            <button
              type="submit"
              class="bg-[#F7AB0A] py-5 px-10 rounded-md
                       text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
