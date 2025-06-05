import { XIcon } from "./icons/x-icon"
import { InstagramIcon } from "./icons/instagram-icon"
import { DiscordIcon } from "./icons/discord-icon"
import { FacebookIcon } from "./icons/facebook-icon"
import { LinkedInIcon } from "./icons/linkedin-icon"
import { SocialIcon } from "./social-icon"

export function SocialFooter() {
  return (
    <div className="w-full max-w-xl mx-auto p-8 flex justify-center space-x-6">
      <SocialIcon
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (formerly Twitter)"
        icon={<XIcon className="w-6 h-6" />}
      />
      <SocialIcon
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        icon={<InstagramIcon className="w-6 h-6" />}
      />
      <SocialIcon
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discord"
        icon={<DiscordIcon className="w-6 h-6" />}
      />
      <SocialIcon
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        icon={<FacebookIcon className="w-6 h-6" />}
      />
      <SocialIcon
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        icon={<LinkedInIcon className="w-6 h-6" />}
      />
    </div>
  )
}
