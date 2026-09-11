import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import {
   FaBell,
   FaBookmark,
   FaComments,
   FaDice,
   FaHouse,
   FaPaperPlane,
   FaRegComment,
   FaRegHeart,
   FaShare,
   FaUser,
   FaUserGroup,
} from 'react-icons/fa6';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdVerified } from 'react-icons/md';
import { styles } from './index.stylex';

const people = [
   { initials: 'AL', name: 'Alana', detail: 'Mesa 4 · conversar', color: 'plum' },
   { initials: 'RB', name: 'Rafael', detail: 'Balcão · jogar', color: 'blue' },
   { initials: 'BI', name: 'Bia + Iza', detail: 'Mesa 7 · em dupla', color: 'green' },
] as const;

const stories = [
   { initials: 'VC', label: 'Você', tone: 'self' },
   { initials: 'M4', label: 'Mesa 4', tone: 'plum' },
   { initials: 'DJ', label: 'DJ Caio', tone: 'blue' },
   { initials: 'BR', label: 'Bruna', tone: 'green' },
   { initials: 'RL', label: 'Rolos', tone: 'orange' },
] as const;

export default function VenuePreview() {
   return (
      <main {...stylex.props(styles.root)}>
         <aside {...stylex.props(styles.desktopNav)}>
            <div {...stylex.props(styles.brandMark)}>M</div>
            <nav {...stylex.props(styles.desktopNavItems)} aria-label="Navegação principal">
               <button type="button" {...stylex.props(styles.navButton, styles.navButtonActive)}>
                  <FaHouse size={20} />
                  <span>Início</span>
               </button>
               <button type="button" {...stylex.props(styles.navButton)}>
                  <FaUserGroup size={20} />
                  <span>Descobrir</span>
               </button>
               <button type="button" {...stylex.props(styles.navButton)}>
                  <FaDice size={20} />
                  <span>Jogar</span>
               </button>
               <button type="button" {...stylex.props(styles.navButton)}>
                  <FaComments size={20} />
                  <span>Mensagens</span>
               </button>
            </nav>
            <button type="button" {...stylex.props(styles.profileButton)} aria-label="Abrir perfil">
               VC
            </button>
         </aside>

         <section {...stylex.props(styles.content)}>
            <header {...stylex.props(styles.mobileHeader)}>
               <div {...stylex.props(styles.mobileBrand)}>Mesa</div>
               <div {...stylex.props(styles.headerActions)}>
                  <button
                     type="button"
                     {...stylex.props(styles.iconButton)}
                     aria-label="Notificações"
                  >
                     <FaBell size={19} />
                  </button>
                  <button type="button" {...stylex.props(styles.iconButton)} aria-label="Mensagens">
                     <FaPaperPlane size={19} />
                  </button>
               </div>
            </header>

            <div {...stylex.props(styles.venueBar)}>
               <div {...stylex.props(styles.venueIcon)}>
                  <IoLocationSharp size={20} />
               </div>
               <div {...stylex.props(styles.venueText)}>
                  <span {...stylex.props(styles.eyebrow)}>Você está no</span>
                  <strong {...stylex.props(styles.venueName)}>Bar do Centro</strong>
               </div>
               <div {...stylex.props(styles.checkinBadge)}>
                  <MdVerified size={17} />
                  Check-in ativo
               </div>
            </div>

            <div {...stylex.props(styles.pageGrid)}>
               <div {...stylex.props(styles.feedColumn)}>
                  <section {...stylex.props(styles.stories)} aria-label="Momentos no bar">
                     {stories.map(story => (
                        <button key={story.label} type="button" {...stylex.props(styles.story)}>
                           <span {...stylex.props(styles.storyRing)}>
                              <span {...stylex.props(styles.avatar, styles[story.tone])}>
                                 {story.initials}
                              </span>
                           </span>
                           <span {...stylex.props(styles.storyLabel)}>{story.label}</span>
                        </button>
                     ))}
                  </section>

                  <article {...stylex.props(styles.post)}>
                     <header {...stylex.props(styles.postHeader)}>
                        <div {...stylex.props(styles.postAuthor)}>
                           <div {...stylex.props(styles.avatar, styles.orange)}>LM</div>
                           <div>
                              <div {...stylex.props(styles.authorLine)}>
                                 <strong>Lucas Martins</strong>
                                 <MdVerified size={15} />
                              </div>
                              <span {...stylex.props(styles.postMeta)}>Mesa 6 · há 3 min</span>
                           </div>
                        </div>
                        <button
                           type="button"
                           {...stylex.props(styles.iconButton)}
                           aria-label="Mais opções"
                        >
                           <HiOutlineDotsHorizontal size={22} />
                        </button>
                     </header>

                     <div {...stylex.props(styles.postImage)}>
                        <Image
                           src="/bar-friends.png"
                           alt="Quatro amigos brindando e rindo em um bar"
                           fill
                           sizes="(max-width: 760px) 100vw, 620px"
                           preload
                           {...stylex.props(styles.image)}
                        />
                        <div {...stylex.props(styles.livePill)}>Agora no Bar do Centro</div>
                     </div>

                     <div {...stylex.props(styles.postBody)}>
                        <div {...stylex.props(styles.postActions)}>
                           <div {...stylex.props(styles.actionGroup)}>
                              <button
                                 type="button"
                                 {...stylex.props(styles.iconButton)}
                                 aria-label="Curtir"
                              >
                                 <FaRegHeart size={23} />
                              </button>
                              <button
                                 type="button"
                                 {...stylex.props(styles.iconButton)}
                                 aria-label="Comentar"
                              >
                                 <FaRegComment size={22} />
                              </button>
                              <button
                                 type="button"
                                 {...stylex.props(styles.iconButton)}
                                 aria-label="Compartilhar"
                              >
                                 <FaShare size={20} />
                              </button>
                           </div>
                           <button
                              type="button"
                              {...stylex.props(styles.iconButton)}
                              aria-label="Salvar"
                           >
                              <FaBookmark size={20} />
                           </button>
                        </div>
                        <strong {...stylex.props(styles.likeCount)}>
                           Curtido por 28 pessoas no bar
                        </strong>
                        <p {...stylex.props(styles.caption)}>
                           <strong>lucasm</strong> Hoje a Mesa 6 veio completa. Quem encara uma
                           partida?
                        </p>
                        <button type="button" {...stylex.props(styles.challengeButton)}>
                           <FaDice size={18} />
                           Desafiar esta mesa
                        </button>
                     </div>
                  </article>
               </div>

               <aside {...stylex.props(styles.sideColumn)}>
                  <section {...stylex.props(styles.sideCard)}>
                     <div {...stylex.props(styles.sectionHeading)}>
                        <div>
                           <span {...stylex.props(styles.eyebrow)}>Disponíveis agora</span>
                           <h2>Pessoas no bar</h2>
                        </div>
                        <span {...stylex.props(styles.onlineCount)}>18 online</span>
                     </div>
                     <div {...stylex.props(styles.peopleList)}>
                        {people.map(person => (
                           <div key={person.name} {...stylex.props(styles.personRow)}>
                              <div {...stylex.props(styles.avatar, styles[person.color])}>
                                 {person.initials}
                              </div>
                              <div {...stylex.props(styles.personText)}>
                                 <strong>{person.name}</strong>
                                 <span>{person.detail}</span>
                              </div>
                              <button type="button" {...stylex.props(styles.meetButton)}>
                                 Ver
                              </button>
                           </div>
                        ))}
                     </div>
                     <button type="button" {...stylex.props(styles.primaryButton)}>
                        Descobrir pessoas
                     </button>
                  </section>

                  <section {...stylex.props(styles.gameCard)}>
                     <div {...stylex.props(styles.gameIcon)}>
                        <FaDice size={24} />
                     </div>
                     <div {...stylex.props(styles.gameText)}>
                        <span {...stylex.props(styles.eyebrow)}>Desafio aberto</span>
                        <h2>Mesa 2 procura dupla</h2>
                        <p>Truco · melhor de três · prêmio do bar</p>
                     </div>
                     <button type="button" {...stylex.props(styles.gameButton)}>
                        Aceitar desafio
                     </button>
                  </section>
               </aside>
            </div>
         </section>

         <nav {...stylex.props(styles.mobileNav)} aria-label="Navegação principal">
            <button type="button" {...stylex.props(styles.mobileNavButton, styles.mobileNavActive)}>
               <FaHouse size={21} />
               <span>Início</span>
            </button>
            <button type="button" {...stylex.props(styles.mobileNavButton)}>
               <FaUserGroup size={21} />
               <span>Descobrir</span>
            </button>
            <button type="button" {...stylex.props(styles.mobileNavButton, styles.playNavButton)}>
               <FaDice size={23} />
               <span>Jogar</span>
            </button>
            <button type="button" {...stylex.props(styles.mobileNavButton)}>
               <FaComments size={21} />
               <span>Mensagens</span>
            </button>
            <button type="button" {...stylex.props(styles.mobileNavButton)}>
               <FaUser size={20} />
               <span>Perfil</span>
            </button>
         </nav>
      </main>
   );
}
