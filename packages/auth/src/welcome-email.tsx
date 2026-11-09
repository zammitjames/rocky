// Modified for Rocky: welcome copy and project links.
/** @jsxRuntime automatic */
import type { TransactionalEmail } from "@rakazo/adapter-kit";
import { Link, Text } from "react-email";
import { emailText, greeting, linkStyle, message } from "./email.js";

export function welcomeEmail(
  user: { email: string; name: string },
  unsubscribeUrl: string,
  locale = "en",
): Promise<TransactionalEmail> {
  const say = emailText(locale);
  return message(
    user.email,
    locale,
    say("Welcome to Rocky"),
    <>
      <Text>{greeting(say, user.name)}</Text>
      <Text>{say("Thanks for signing up for Rocky.")}</Text>
      <Text>
        <Link href="https://github.com/zammitjames/rocky" style={linkStyle}>
          Rocky on GitHub
        </Link>
      </Text>
    </>,
    unsubscribeUrl,
  );
}
