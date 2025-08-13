import React from "react";
import { Bed, Bath, Ruler, Car } from "lucide-react";

const photos = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c55a?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521783988139-893ce881e1b8?q=80&w=1974&auto=format&fit=crop",
];

const highlights = [
  { label: "Freehold", desc: "Ownership with no lease restrictions." },
  { label: "Loan approved", desc: "Eligible for hassle-free home loans." },
  { label: "Gated community", desc: "Secure and private neighborhood." },
  { label: "Near Metro", desc: "Quick access to public transportation." },
  { label: "Corner plot", desc: "Premium corner-facing property." }
];

const amenities = [
  "Modular kitchen",
  "24×7 security",
  "Power backup",
  "Clubhouse & gym",
  "Jogging track",
  "Swimming pool",
  "Children’s play area",
  "Rainwater harvesting",
];

const PropertyDetail = () => {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      
      
      <section className="relative">
        <div className="relative h-[48vh] md:h-[64vh] w-full overflow-hidden rounded-b-3xl">
          <img
            src={photos[0]}
            alt="Property hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-4 right-4 md:left-6 md:right-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-3 text-white">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Ready to Move • New Listing
              </span>
              <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
                Maple Haven House — 4 BHK Luxury Villa
              </h1>
            </div>
          </div>
        </div>
      </section>

     
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        
        <div className="lg:col-span-2 space-y-8">
          
         
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: <Bed className="w-4 h-4" />, label: "Beds", value: "4" },
              { icon: <Bath className="w-4 h-4" />, label: "Baths", value: "4" },
              { icon: <Ruler className="w-4 h-4" />, label: "Area", value: "3,250 sq.ft" },
              { icon: <Car className="w-4 h-4" />, label: "Parking", value: "2 cars" }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  {item.icon} {item.label}
                </div>
                <div className="text-2xl font-semibold">{item.value}</div>
              </div>
            ))}
          </div>

          
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-neutral-700 leading-relaxed">
              Experience boutique villa living at Maple Haven House. This 4 BHK home blends
              contemporary architecture with warm, natural materials. Expansive windows flood the
              living spaces with daylight, while a private deck opens to a manicured lawn—perfect
              for family evenings. Located minutes from schools, shopping, and metro connectivity.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {highlights.map(h => (
                <span key={h.label} className="rounded-full border px-3 py-1 text-xs text-neutral-700">
                  {h.label}
                </span>
              ))}
            </div>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-3">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {photos.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border bg-white">
                  <img
                    src={src}
                    alt={`Photo ${i + 1}`}
                    className="h-44 md:h-56 w-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>

        
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {amenities.map(a => (
                <li key={a} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Location</h2>
            <p className="text-neutral-700 mb-3">
              Indirapuram is a well-connected micro-market with schools, hospitals, and malls within
              a 2–5 km radius. The upcoming RRTS and existing Blue Line Metro enhance city-wide access.
            </p>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((item, i) => (
                    <div
                      key={i}
                      title={item.desc}
                      className="px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-yellow-100 hover:border-yellow-400 transition cursor-pointer"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <aside className="lg:col-span-1 space-y-6">
          <div className="sticky top-6 space-y-6">
            
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-3xl font-semibold">₹ 3.25 Cr</div>
                  <div className="text-sm text-neutral-500">All inclusive, negotiable</div>
                </div>
                <span className="rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-medium">
                  For Sale
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                {[
                  { label: "Price/Sq.ft", value: "₹ 10,000" },
                  { label: "Status", value: "Ready" },
                  { label: "Age", value: "New" }
                ].map((info, idx) => (
                  <div key={idx} className="rounded-xl border p-3 text-center">
                    <div className="text-xs text-neutral-500">{info.label}</div>
                    <div className="font-semibold">{info.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center justify-center text-lg rounded-xl bg-neutral-900 px-4 py-3 text-white hover:opacity-90"
                >
                  Call
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border px-4 py-3 text-neutral-900 hover:bg-neutral-50"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                * By contacting us you agree to our Terms & Privacy Policy.
              </p>
            </div>

            
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold mb-3">Property Details</h3>
              <dl className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex justify-between"><dt className="text-neutral-500">Property ID</dt><dd className="font-medium">EKP-2025-1042</dd></div>
                <div className="flex justify-between"><dt className="text-neutral-500">Type</dt><dd className="font-medium">Independent Villa</dd></div>
                <div className="flex justify-between"><dt className="text-neutral-500">Carpet Area</dt><dd className="font-medium">2,650 sq.ft</dd></div>
                <div className="flex justify-between"><dt className="text-neutral-500">Super Area</dt><dd className="font-medium">3,250 sq.ft</dd></div>
                <div className="flex justify-between"><dt className="text-neutral-500">Floor</dt><dd className="font-medium">G + 1 + Terrace</dd></div>
                <div className="flex justify-between"><dt className="text-neutral-500">Furnishing</dt><dd className="font-medium">Semi-furnished</dd></div>
                <div className="flex justify-between"><dt className="text-neutral-500">RERA</dt><dd className="font-medium">NA (Ready)</dd></div>
              </dl>
            </div>
          </div>
        </aside>
      </section>

    
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
        <h2 className="text-xl font-semibold mb-4">Similar Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <article key={i} className="rounded-2xl overflow-hidden border bg-white shadow-sm">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={photos[i]}
                  alt={`Listing ${i}`}
                  className="h-full w-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">3 BHK Premium Villa</h3>
                  <span className="text-sm font-medium">₹ 2.75 Cr</span>
                </div>
                <p className="mt-1 text-sm text-neutral-600">Vaishali • 2,400 sq.ft • 3 Bath</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <span className="rounded-full border px-2 py-0.5 text-xs">Ready to move</span>
                  <span className="rounded-full border px-2 py-0.5 text-xs">South facing</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;
