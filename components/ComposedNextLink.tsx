import { forwardRef } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface Props {
  href: NextLinkProps["href"];
}

const ComposedNextLink = forwardRef<HTMLAnchorElement, Props>(
  function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
  }
);

export default ComposedNextLink;
