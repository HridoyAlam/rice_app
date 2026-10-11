import Stalks from "./Stalks";

const Hero = () => {
  const intro = [
    "ভাত বাংলাদেশের প্রধান খাদ্য। এখানে জাত ধরে ধরে চাষের তথ্য পাবেন।",
    "দেশের বেশির ভাগ কৃষিজমিতে ধান চাষ হয়, আর লাখ লাখ কৃষক পরিবারের জীবিকা এই ফসলের ওপর নির্ভর করে।",
    "আউশ, আমন ও বোরো, এই তিন মৌসুমে সারা বছর ধানের আবাদ চলে।",
    "১৯৭০ সালে প্রতিষ্ঠিত বাংলাদেশ ধান গবেষণা ইনস্টিটিউট (ব্রি) গাজীপুর থেকে উচ্চফলনশীল ও পরিবেশসহনশীল জাত উদ্ভাবন করে আসছে।",
  ];
  return (
    <section className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
      <div className="max-w-xl">
        {/* <h1 className="p-8 text-4xl font-bold text-amber-600">ধানের দেশ</h1> */}

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl text-field">
          বাংলাদেশের ধান, জাতে জাতে
        </h1>
        <div className="mt-4 space-y-3 text-lg">
          {intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
      <Stalks />
    </section>
  );
};

export default Hero;
