"use client";
import { IconChevronDown } from "@/components/icons/ChevronDown";
import { useLang } from "@/lib/useLang";
import Link from "next/link";
import { useContext, useState } from "react";
import { LangContext } from "@/contexts/LangContext";

export default function PageIndex() {
  const [langsOpen, setLangsOpen] = useState<boolean>(false);
  const langContext = useContext(LangContext);

  const debateTools = useLang("debateTools");
  const madeWithLove = useLang("madeWithLove");
  const debateUtility = useLang("oxfDebateUtility");
  const ladderGen = useLang("ladderGen");
  const motionGen = useLang("motionGen");
  const soundDemo = useLang("soundDemo");

  return (
    <>
      <div className="text-center py-12 pt-14">
        <h1 className="text-4xl font-serif text-zinc-50">{debateTools}</h1>
        <p className="text-zinc-400">{madeWithLove}</p>
      </div>
      <div className="buttonflex">
        <Link tabIndex={-1} href="/debate/setup">
          <button>{debateUtility}</button>
        </Link>
        <Link tabIndex={-1} href="/soundtest">
          <button>{soundDemo}</button>
        </Link>
        <Link tabIndex={-1} href="bracket-generator">
          <button disabled>{ladderGen}</button>
        </Link>
        <Link tabIndex={-1} href="/motion-generator">
          <button disabled>{motionGen}</button>
        </Link>
      </div>

      <button
        className={`langbtn ${langsOpen ? "opened" : ""}`}
        onClick={() => {
          setLangsOpen(!langsOpen);
        }}
      >
        {langContext?.lang === "pl" ? "polski" : "English"}
        <IconChevronDown />
      </button>
      <div className={`langpane ${langsOpen ? "" : "hide"}`}>
        <button
          className={langContext?.lang == "en" ? "hidden" : ""}
          onClick={() => {
            langContext?.setLang("en");
            setLangsOpen(false);
          }}
        >
          English
        </button>
        <button
          className={langContext?.lang == "pl" ? "hidden" : ""}
          onClick={() => {
            langContext?.setLang("pl");
            setLangsOpen(false);
          }}
        >
          polski
        </button>
      </div>
    </>
  );
}
