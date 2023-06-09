"use client";
import { DebateContext, debateType } from "@/contexts/DebateContext";
import { useLang } from "@/lib/useLang";
import { useContext, useState } from "react";
import { IconCheckSquare } from "./icons/CheckSquare";
import { IconSquare } from "./icons/Square";
import { IconCheck } from "./icons/Check";
import { IconX } from "./icons/X";

const DebateSetting = (props: { setting: keyof debateType }) => {
  const debate = useContext(DebateContext);
  const inputstyle = `
		w-full p-2 bg-zinc-700 border border-transparent rounded
		outline-0 hover:bg-zinc-800 hover:border-zinc-400
		focus:bg-zinc-800 focus:border-zinc-400
	`;
  const buttonstyle = `
		w-full p-2 bg-zinc-700 border border-transparent rounded
		outline-0 hover:bg-zinc-600 hover:border-zinc-400
	`;
  const activestyle = "!border-violet-400";

  const inputType = typeof debate?.data[props.setting];

  const string = useLang(props.setting);
  const stringdesc = useLang(`${props.setting}Desc`);
  const or = useLang("or");
  const seconds = useLang("seconds");
  const minutes = useLang("minutes");
  const off = useLang("off");
  const minute = useLang("minute");
  const dontshow = useLang("dontShow");

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between pb-1">
        <p className="text-zinc-100">{string}</p>
        <p className="text-zinc-500">{stringdesc}</p>
      </div>
      {props.setting === "speechTime" ? (
        <div className="flex flex-row gap-2 items-baseline">
          <button
            className={`${buttonstyle} ${
              debate?.data.speechTime === 240 ? activestyle : ""
            }`}
            onClick={() => {
              debate?.setData({ ...debate.data, speechTime: 240 });
            }}
          >
            4 {minutes}
          </button>
          <button
            className={`${buttonstyle} ${
              debate?.data.speechTime === 120 ? activestyle : ""
            }`}
            onClick={() => {
              debate?.setData({ ...debate.data, speechTime: 120 });
            }}
          >
            2 {minutes}
          </button>
          <p>{or}</p>
          <input
            type="number"
            min={1}
            className={inputstyle}
            value={debate?.data[props.setting]}
            placeholder={string}
            onChange={(e) => {
              debate?.setData({
                ...debate.data,
                [props.setting]: parseInt(e.target.value),
              });
            }}
          />
          <p>{seconds}.</p>
        </div>
      ) : props.setting === "protectedTime" ? (
        <div className="flex flex-row gap-2 items-baseline">
          {/* <div className="w-1/2"> */}
          <button
            className={`${buttonstyle} ${
              debate?.data.protectedTime === 30 ? activestyle : ""
            }`}
            onClick={() => {
              debate?.setData({ ...debate.data, protectedTime: 30 });
            }}
          >
            30 {seconds}
          </button>
          <button
            className={`${buttonstyle} ${
              debate?.data.protectedTime === 20 ? activestyle : ""
            }`}
            onClick={() => {
              debate?.setData({ ...debate.data, protectedTime: 20 });
            }}
          >
            20 {seconds}
          </button>
          {/* </div> */}
          <p>{or}</p>
          <input
            type="number"
            min={1}
            className={inputstyle}
            value={debate?.data[props.setting]}
            placeholder={string}
            onChange={(e) => {
              debate?.setData({
                ...debate.data,
                [props.setting]: parseInt(e.target.value),
              });
            }}
          />
          <p>{seconds}.</p>
        </div>
      ) : props.setting === "adVocemTime" ? (
        <div className="flex flex-row gap-2 items-baseline">
          <button
            className={`${buttonstyle} ${
              debate?.data.adVocemTime === 60 ? activestyle : ""
            }`}
            onClick={() => {
              debate?.setData({ ...debate.data, adVocemTime: 60 });
            }}
          >
            1 {minute}
          </button>
          <button
            className={`${buttonstyle} ${
              debate?.data.adVocemTime === 0 ? activestyle : ""
            }`}
            onClick={() => {
              debate?.setData({ ...debate.data, adVocemTime: 0 });
            }}
          >
            {off}
          </button>
          <p>{or}</p>
          <input
            type="number"
            min={1}
            className={inputstyle}
            value={debate?.data[props.setting]}
            placeholder={string}
            onChange={(e) => {
              debate?.setData({
                ...debate.data,
                [props.setting]: parseInt(e.target.value),
              });
            }}
          />
          <p>{seconds}.</p>
        </div>
      ) : props.setting === "showProtectedTime" ? (
        <button
          onClick={() =>
            debate?.setData({
              ...debate.data,
              showProtectedTime: !debate.data.showProtectedTime,
            })
          }
          className={`${buttonstyle} text-left pl-6 px-4 flex flex-row justify-between`}
        >
          {string}
          {debate?.data.showProtectedTime ? <IconCheck /> : <IconX />}
        </button>
      ) : props.setting === "beepProtectedTime" ? (
        <button
          onClick={() =>
            debate?.setData({
              ...debate.data,
              beepProtectedTime: !debate.data.beepProtectedTime,
            })
          }
          className={`${buttonstyle} text-left pl-6 px-4 flex flex-row justify-between`}
        >
          {string}
          {debate?.data.beepProtectedTime ? <IconCheck /> : <IconX />}
        </button>
      ) : inputType === "string" ? (
        <input
          type="text"
          className={inputstyle}
          value={debate?.data[props.setting]}
          placeholder={string}
          onChange={(e) => {
            debate?.setData({
              ...debate.data,
              [props.setting]: e.target.value,
            });
          }}
        />
      ) : inputType === "number" ? (
        <input
          type="number"
          min={1}
          className={inputstyle}
          value={debate?.data[props.setting]}
          placeholder={string}
          onChange={(e) => {
            debate?.setData({
              ...debate.data,
              [props.setting]: parseInt(e.target.value),
            });
          }}
        />
      ) : (
        "unsupported input."
      )}
    </div>
  );
};
export { DebateSetting };
