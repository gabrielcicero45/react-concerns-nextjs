import Link from "next/link";
import cx from "./Header.module.scss";

export const Header = () => {

  return (
    <header className={cx.header}>
      <h1 className={cx.title}>Sistema Interno</h1>

      <nav className={cx.navbar}>
        <ul className={cx.navbarList}>
          <Link href={'/'} className={cx.navbarListItem}>
            Salas
          </Link>
          <Link href={'/students'} className={cx.navbarListItem}>
            Alunos
          </Link>
          <Link href={'/inventory'} className={cx.navbarListItem}>
            Inventário
          </Link>
        </ul>
      </nav>
    </header>
  );
};
