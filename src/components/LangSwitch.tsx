import { LangContext } from "@/contexts/LangContext";
import { useLang, useSpecifiedLang } from "@/lib/useLang";
import { langsArray, langsPublicBlacklist, language } from "@/types/language";
import { useContext, useState } from "react";
import { IconChevronDown } from "./icons/ChevronDown";
import { IconCheck } from "./icons/Check";
import { IconBlankIcon } from "./icons/BlankIcon";

const LangSwitchComponent = () => {
  const langContext = useContext(LangContext);
  const [langMenuOpen, setLangMenuOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-row justify-between relative">
      <p className="text-neutral-500">{useLang("language")}</p>
      <button
        className="flex flex-row gap-2 text-neutral-500"
        onClick={() => setLangMenuOpen(true)}
      >
        {useLang("selfLanguageString")}
        <IconChevronDown moreClass="scale-[.75]" />
      </button>
      {langMenuOpen ? (
        <div className="absolute top-0 right-0 flex flex-col z-50 bg-neutral-800 rounded-md border-2 p-1 gap-1 border-neutral-700 shadow shadow-black">
          {langsArray
            // language type selector blacklist
            .filter((lang: language) => !langsPublicBlacklist.includes(lang))
            .map((lang: language) => {
              return (
                <button
                  onClick={() => {
                    setLangMenuOpen(false);
                    langContext.setLang(lang);
                  }}
                  className={`
                    flex flex-row gap-1 rounded
                    pr-3 hover:bg-neutral-700
                  `}
                >
                  {langContext.lang === lang ? (
                    <IconCheck moreClass="scale-[.65]" />
                  ) : (
                    <IconBlankIcon />
                  )}
                  {useSpecifiedLang("selfLanguageString", lang)}
                </button>
              );
            })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export { LangSwitchComponent };