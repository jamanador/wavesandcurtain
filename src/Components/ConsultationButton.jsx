import { useState } from "react";

export default function ConsultationButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-white text-[#00B2AD] font-semibold py-4 px-8 md:px-12 text-sm md:text-lg rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
      >
        Get a Free Consultation
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Send us a Message
            </h2>

            <p className="text-gray-600 mb-5">
              We’ll connect with you instantly on WhatsApp.
            </p>

            <button
              onClick={() =>
              (window.location.href =
                "https://wa.me/971553371902?text=Hi!%20I’m%20looking%20for%20a%20free%20consultation.%20Can%20you%20please%20assist%20me%3F%0AI'm%20interested%20in%20knowing%20the%20best%20options%20for%20my%20home.")
              }
              className="bg-[#00B2AD] text-white w-full py-3 rounded-lg font-semibold hover:bg-[#00928F] transition-all"
            >
              Open WhatsApp
            </button>

            <button
              onClick={() => setOpen(false)}
              className="mt-3 text-gray-900 font-medium hover:opacity-70 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
