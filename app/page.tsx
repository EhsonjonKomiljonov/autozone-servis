import Image from "next/image"
import Link from "next/link"
import { Youtube, Instagram, Phone, MapPin, Navigation, ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Hexagon Background Pattern */}
      <div className="w-full h-[250px] relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div
            className="w-full h-full opacity-30"
            style={{
              backgroundImage: "url('/bg-site.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>

      {/* Logo and Title */}
      <div className="relative -mt-44 flex flex-col items-center">
        <div className="bg-black rounded-full p-2 mb-4">
          <Image src="/logo.png" alt="AutoZone Logo" width={120} height={120} className="rounded-full" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-white">AutoZone</h1>

        {/* Description Lines */}
        <div className="text-center mb-6 text-gray-300">
          <p>{"🚗 Kafolatli avtozapchatslar"}</p>
          <p>{"🔧 Sifatli Avtoservis xizmatlari"}</p>
          <p>{"✔️ Foydali layfhaklar"}</p>
        </div>

        <h2 className="text-xl mb-8 text-white">Ijtimoiy tarmoqlarimiz</h2>
      </div>

      {/* Social Media and Contact Links */}
      <div className="w-full max-w-lg px-4 space-y-3 mb-8">
        <SocialLink
          icon={<Youtube className="w-6 h-6" />}
          title="YOUTUBE"
          subtitle="AutoZone servis"
          link="https://www.youtube.com/@Autozone_servis"
        />

        <SocialLink
          icon={<Youtube className="w-6 h-6" />}
          title="YOUTUBE"
          subtitle="AutoZone shop"
          link="https://www.youtube.com/@AutoZoneShop"
        />

        <SocialLink
          icon={<Instagram className="w-6 h-6" />}
          title="INSTAGRAM"
          subtitle="@autozone_servis"
          link="https://www.instagram.com/autozone_servis/"
        />

        <SocialLink
          icon={<Instagram className="w-6 h-6" />}
          title="INSTAGRAM"
          subtitle="@autozone_shop_servis"
          link="https://www.instagram.com/autozone_shop_servis/"
        />

        <SocialLink
          icon={
            <div className="flex items-center justify-center">
              <Image src="/telegram-icon.png" alt="Telegram" width={24} height={24} />
            </div>
          }
          title="TELEGRAM"
          subtitle="@autozone_shop"
          link="https://t.me/autozone_shop"
        />

        <SocialLink icon={<Phone className="w-6 h-6" />} title="TELEFON" subtitle="Servis" link="tel:+9989773052222" />
        <SocialLink icon={<Phone className="w-6 h-6" />} title="TELEFON" subtitle="Servis" link="tel:+9989773053333" />

        <SocialLink icon={<Phone className="w-6 h-6" />} title="TELEFON" subtitle="Do'kon" link="tel:+998993736015" />
      </div>

      {/* Working Hours */}
      <div className="w-full max-w-lg px-4 text-center mb-8">
        <p className="text-gray-300">Ish vaqtimiz: 09:00 - 20:00</p>
      </div>

      {/* Branches Section */}
      <div className="w-full max-w-lg px-4 mb-8">
        <div className="text-center mb-4">
          <h2 className="text-xl mb-2 text-white">Manzilimiz</h2>
          <ChevronDown className="w-6 h-6 mx-auto text-[#e31916]" />
        </div>

        {/* First Branch */}
        <div className="mb-3">
          <h3 className="text-center mb-4">Olmazor tumani, Allon ko'chasi</h3>

          <div className="space-y-3">
            <MapLink
              icon={<Navigation className="w-6 h-6" />}
              title="YANDEX MAP"
              link="https://yandex.uz/maps/-/CHrpZPMS"
            />

            <MapLink
              icon={<MapPin className="w-6 h-6" />}
              title="GOOGLE MAP"
              link="https://maps.app.goo.gl/P3vRv2rjETxK8few9"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-500 text-sm">
        <p className="text-gray-500 font-bold">AutoZone</p>
        <p>Tanlov sizdan sifat bizdan</p>
      </footer>
    </main>
  )
}

// Social Media Link Component
function SocialLink({ icon, title, subtitle, link = "#" }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center bg-[#1a1a1a] border border-[#e31916] rounded p-3 hover:bg-[#2a2a2a] transition-colors shake-animation"
      rel="noreferrer"
    >
      <div className="bg-[#e31916] p-2 rounded mr-4">{icon}</div>
      <div>
        <div className="font-medium text-white">{title}</div>
        <div className="text-sm text-gray-400">{subtitle}</div>
      </div>
    </a>
  )
}

// Map Link Component
function MapLink({ icon, title, link }) {
  return (
    <Link
      href={link}
      className="flex items-center bg-[#1a1a1a] border border-[#e31916] rounded p-3 hover:bg-[#2a2a2a] transition-colors shake-animation"
    >
      <div className="bg-[#e31916] p-2 rounded mr-4">{icon}</div>
      <div className="font-medium text-white">{title}</div>
    </Link>
  )
}
