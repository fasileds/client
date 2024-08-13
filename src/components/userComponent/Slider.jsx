import React from "react";

export default function Slider() {
  return (
    <div id="gallery" class="relative w-full" data-carousel="slide">
      <div class="relative h-56 overflow-hidden rounded-lg m-10 md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="absolute block max-w-[600px] h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>

        <div
          class="hidden duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <img
            src="https://images.unsplash.com/photo-1530538987395-032d1800fdd4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="absolute block max-w-[600px] h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1521123845560-14093637aa7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            class="absolute block max-w-[600px] h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1539877254216-818ed7c76096?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="absolute block max-w-[600px] h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1511108690759-009324a90311?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="absolute block max-w-[600px] h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
      </div>

      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
        data-carousel-prev
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
