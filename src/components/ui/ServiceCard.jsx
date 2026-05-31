import React from "react";

function ServiceCard({
  icon: IconComponent,
  title,
  description,
}) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 lg:p-7 transition-all duration-300 hover:border-primary/40">
      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/20">
        <IconComponent className="h-6 w-6 text-primary" />
      </div>
      <div className="relative z-10">
        <h3 className="mb-1 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-primary sm:text-xl">
          {title}
        </h3>

        <p className="text-sm text-white/70 sm:text-base text-justify">
          {description}
        </p>
      </div>

      <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/3 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

export default ServiceCard;