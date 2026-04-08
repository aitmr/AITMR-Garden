import { Send } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen scroll-mt-24 bg-[#1A1817] px-6 py-20 text-center text-white md:scroll-mt-28 md:py-28"
    >
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-xs tracking-widest text-gray-400">GET IN TOUCH</p>

        <h2 className="mt-6 whitespace-pre-line text-5xl font-light leading-[1.15] md:text-7xl">
          {'有想法？\n聊聊吧。'}
        </h2>

        <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-400">
          无论是技术交流、商业合作，还是产品咨询，欢迎随时联系。
        </p>

        <div className="mx-auto mt-12 grid w-full max-w-xl grid-cols-1 gap-8 text-center sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs tracking-widest text-gray-500">EMAIL</p>
            <p className="text-base text-white">tiemourenmmmm@gmail.com</p>
          </div>
          <div>
            <p className="mb-2 text-xs tracking-widest text-gray-500">WECHAT</p>
            <p className="text-base text-white">铁某人</p>
          </div>
        </div>

        <a
          href="mailto:tiemourenmmmm@gmail.com"
          className="mx-auto mt-10 inline-flex items-center gap-2 bg-[#C89A67] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#B98755]"
        >
          <Send size={16} />
          发送邮件
        </a>

        <div className="mt-12 flex justify-center gap-4">
          {[
            { icon: FaGithub, label: 'GitHub', href: 'https://github.com/' },
            { label: 'Placeholder 1', href: '#' },
            { label: 'Placeholder 2', href: '#' },
          ].map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={item.label}
                className="inline-flex h-12 w-12 items-center justify-center border border-white/20 text-gray-300 transition-colors hover:border-white/40 hover:text-white"
              >
                {Icon ? <Icon size={18} /> : <span className="text-[10px]">占位</span>}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
