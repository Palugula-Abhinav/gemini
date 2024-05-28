"use client";
import { useRouter } from "next/navigation";
import Randomstring from "randomstring";

export default () => {
  let router = useRouter();
  let { push } = router;
  push(`/${Randomstring.generate()}`);
};
