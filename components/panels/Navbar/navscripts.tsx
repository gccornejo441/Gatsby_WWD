import Link from "next/link";

export const MyLink = (props) => {
  let { href, children, ...rest } = props;
  return (
    <Link legacyBehavior href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};
