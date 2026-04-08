import { ArrowRight, Pencil } from 'lucide-react'
import bilibiliIcon from '../../assets/B站.png'
import { contentCreations } from '../../data/contentCreations'
import douyinIcon from '../../assets/抖音.png'

function ContentCreationSection() {
  return (
    <section className="home-section-tone-a relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="mb-10 md:mb-12">
          <p className="text-xs tracking-[0.22em] text-textMuted">CONTENT CREATION</p>
          <h2 className="text-3xl font-normal text-textMain md:text-4xl">内容创作</h2>
          <p className="mt-4 text-base leading-8 text-textMuted md:text-lg">
            在多个平台持续输出
            <span className="mx-1 font-normal text-textMain">AI</span>
            与独立开发分享的深度内容
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {contentCreations.map((item) => (
            <article key={item.id} className="flex min-h-[210px] flex-col justify-between py-2">
              <div>
                {item.id === 'wechat' && (
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center text-[#C89A67]">
                    <Pencil size={20} strokeWidth={1.5} />
                  </div>
                )}

                {item.id === 'douyin' && (
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-md">
                    <img src={douyinIcon} alt="抖音图标" className="h-6 w-6 object-contain" loading="lazy" />
                  </div>
                )}

                {item.id === 'bilibili' && (
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-md">
                    <img src={bilibiliIcon} alt="B站图标" className="h-6 w-6 object-contain" loading="lazy" />
                  </div>
                )}

                {item.id === 'wechat' ? (
                  <p className="mb-4 text-2xl font-normal leading-8 tracking-normal text-textMain">
                    {item.platform}
                    <span className="ml-2">「{item.title}」</span>
                  </p>
                ) : (
                  <>
                    {item.platform ? (
                      <p className="mb-3 text-xs tracking-[0.18em] text-textMuted">{item.platform}</p>
                    ) : null}
                    <h3 className="mb-4 text-2xl font-medium leading-8 text-warm-title">{item.title}</h3>
                  </>
                )}
                <p className="text-sm leading-7 text-textMuted">{item.summary}</p>
              </div>

              <a
                href={item.link}
                className="mt-8 inline-flex w-fit items-center text-sm font-medium text-[#C89A67] transition-colors hover:text-[#B98755]"
              >
                {item.ctaText}
                {(item.id === 'wechat' || item.id === 'douyin' || item.id === 'bilibili') && (
                  <ArrowRight size={16} className="ml-1.5" />
                )}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentCreationSection