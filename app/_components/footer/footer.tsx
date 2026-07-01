export function Footer() {
  return (
    <footer className="w-full border-t border-surface-container-highest mt-24 bg-surface-container-high">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter py-stack-lg flex flex-col md:flex-row justify-between items-center gap-base">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary flex items-center gap-2"
            href="#"
          >
            <span className="material-symbols-outlined filled">apartment</span>
            Axil
          </a>
          <p className="font-body-sm text-body-sm text-on-surface-variant ">
            © 2024 Axil Proptech. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
          <a
            className="font-body-sm text-body-sm text-on-surface-variant  hover:text-primary dark:hover:text-primary-fixed transition-colors hover:underline decoration-primary dark:decoration-primary-fixed"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-body-sm text-body-sm text-on-surface-variant  hover:text-primary dark:hover:text-primary-fixed transition-colors hover:underline decoration-primary dark:decoration-primary-fixed"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="font-body-sm text-body-sm text-on-surface-variant  hover:text-primary dark:hover:text-primary-fixed transition-colors hover:underline decoration-primary dark:decoration-primary-fixed"
            href="#"
          >
            Contact Support
          </a>
          <a
            className="font-body-sm text-body-sm text-on-surface-variant  hover:text-primary dark:hover:text-primary-fixed transition-colors hover:underline decoration-primary dark:decoration-primary-fixed"
            href="#"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
