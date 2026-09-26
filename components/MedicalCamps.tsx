import Image from "next/image";

// Add or edit camp entries below. "location" and "date" are left blank —
// fill these in once you know which camp each photo is from.
const camps = [
  { image: "/camps/camp-1.jpeg", alt: "Eye check-up desk at a free medical camp", location: "", date: "" },
  { image: "/camps/camp-2.jpeg", alt: "Attendees gathered under the camp tent", location: "", date: "" },
  { image: "/camps/camp-3.jpeg", alt: "Medical staff attending to patients", location: "", date: "" },
  { image: "/camps/camp-4.jpeg", alt: "Laboratory desk at the medical camp", location: "", date: "" },
  { image: "/camps/camp-5.jpeg", alt: "Medical staff at the TPR desk", location: "", date: "" },
  { image: "/camps/camp-6.jpeg", alt: "Attendees waiting outside the doctor's room", location: "", date: "" },
];

export default function MedicalCamps() {
  return (
    <section id="camps" className="bg-white">
      <div className="container-x py-20 md:py-24">
        <p className="text-sm font-medium text-forest/70">Community Health Initiatives</p>
        <h2 className="mt-3 max-w-[40ch] font-serif text-3xl leading-tight text-forest">
          Free medical camps in local areas across Pakistan.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[15px] leading-relaxed text-ink-muted md:text-base">
          Safe Line Traders (Pvt) Ltd. regularly organizes free medical
          camps in communities across the country, providing essential
          healthcare facilities and services at no cost to attendees.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {camps.map((camp, i) => (
            <div key={i} className="border border-forest/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-forest/10">
                <Image
                  src={camp.image}
                  alt={camp.alt}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-ink">
                  {camp.location || (
                    <span className="text-ink-muted italic">Location — to be added</span>
                  )}
                </p>
                <p className="mt-1 text-xs text-ink-muted">
                  {camp.date || "Date — to be added"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
