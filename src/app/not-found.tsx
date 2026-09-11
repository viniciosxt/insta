import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';
import AuthPagesFooter from '@/src/components/AuthPagesFooter';
import { styles } from './not-found.stylex';

export default function NotFound() {
   return (
      <div {...stylex.props(styles.page)}>
         <main {...stylex.props(styles.main)}>
            <h1 {...stylex.props(styles.heading)}>Esta página não está disponível.</h1>
            <p {...stylex.props(styles.message)}>
               O endereço pode estar incorreto ou a página pode ter mudado.{' '}
               <Link href="/preview" {...stylex.props(styles.link)}>
                  Voltar para o Mesa.
               </Link>
            </p>
         </main>
         <AuthPagesFooter style={{ borderTopStyle: 'none' }} />
      </div>
   );
}
