import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAddForms = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5.427 1.572c.346-.09.769.03.96.355.064.118.085.253.125.38.068.228.2.438.382.587.142.118.314.191.487.248.341.109.7.14 1.055.17.84.053 1.68.046 2.52.048.756 0 1.512.003 2.268-.027.477-.022.96-.048 1.423-.181.28-.08.551-.23.722-.476.13-.18.19-.397.245-.608.051-.202.214-.353.393-.438.331-.16.764-.101 1.02.176a.59.59 0 0 1 .166.49 2.7 2.7 0 0 1-.565 1.238c-.48.578-1.197.886-1.911 1.016-.616.118-1.243.144-1.867.16q-1.87.031-3.74-.002c-.614-.02-1.232-.046-1.836-.172a4 4 0 0 1-.967-.322 2.7 2.7 0 0 1-.888-.693 2.7 2.7 0 0 1-.503-1.002c-.036-.136-.08-.278-.044-.419.064-.268.3-.464.555-.528"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M4.33 6.352c.603-.082 1.213-.092 1.82-.1 2.687-.009 5.373-.002 8.06-.003 1.18.01 2.364-.04 3.538.105.465.067.927.2 1.336.442s.745.61.962 1.04q.051.1.095.207c.184.44-.19.877-.667.877h-.085c-.292 0-.523-.207-.672-.458a1.18 1.18 0 0 0-.638-.5c-.388-.129-.797-.166-1.202-.186-.658-.035-1.317-.03-1.975-.031H8.103c-.77.002-1.54-.002-2.31.01-.543.01-1.092.026-1.624.15-.31.075-.62.233-.799.514-.206.332-.27.73-.306 1.115-.032.306-.04.615-.049.922-.026.947-.013 1.894-.005 2.841.022.679.008 1.38.24 2.027.115.281.333.522.611.637.32.132.663.185 1.005.212.684.052 1.37.05 2.055.052h5.296a.75.75 0 0 1 0 1.497H6.897c-.617-.003-1.233-.001-1.848-.036-.564-.033-1.135-.1-1.666-.312a2.6 2.6 0 0 1-1.09-.803 3 3 0 0 1-.544-1.157 7 7 0 0 1-.175-1.38c-.039-.806-.03-1.613-.03-2.42.002-.57 0-1.141.03-1.711.029-.468.064-.94.187-1.394.11-.413.287-.813.557-1.143.178-.214.386-.403.622-.547.422-.261.906-.398 1.39-.467"
    />
    <path
      fill="currentColor"
      d="M19.946 9.39c.321-.05.653.011.946.152.375.178.69.463.966.775.269.31.494.677.571 1.09.075.384 0 .79-.18 1.132-.156.307-.381.569-.621.81l-3.799 3.893c-.283.312-.679.516-1.093.561q-.705.104-1.408.206c-.356.051-.74-.057-.994-.325-.247-.253-.348-.632-.301-.982q.105-.765.212-1.53c.052-.396.241-.77.525-1.041q1.717-1.766 3.437-3.527c.261-.258.503-.539.789-.769.277-.22.6-.394.95-.446m-.113.881c-.368.164-.631.486-.912.766q.102.277.25.533c.368.657.969 1.168 1.663 1.425.188-.196.391-.38.554-.6.158-.213.288-.472.263-.748-.029-.305-.208-.566-.4-.79-.215-.239-.456-.467-.753-.592a.82.82 0 0 0-.665.006m-4.548 4.494a1.02 1.02 0 0 0-.26.613c-.06.476-.132.95-.196 1.427-.017.12.012.263.117.335.116.08.262.057.392.036.458-.069.917-.133 1.375-.202a.9.9 0 0 0 .386-.165c.105-.075.187-.179.279-.27l2.836-2.908a4.2 4.2 0 0 1-1.92-1.95z"
    />
    <path
      fill="currentColor"
      d="M9.561 19.303c.636-.01 1.273-.006 1.909-.007.616.002 1.232.002 1.848.03.806.036 1.636.105 2.38.452.32.153.62.36.86.627.323.358.54.811.63 1.29a.57.57 0 0 1-.116.466c-.227.297-.648.387-.986.262-.208-.076-.405-.234-.468-.458-.04-.145-.077-.292-.14-.428a1.1 1.1 0 0 0-.385-.465c-.276-.187-.607-.26-.93-.307-.458-.067-.92-.08-1.383-.093-.708-.017-1.417-.012-2.125-.013-.671 0-1.342.003-2.013.036-.436.026-.878.06-1.298.194-.286.09-.556.27-.71.54-.102.171-.145.37-.201.56-.079.24-.305.394-.534.457-.344.096-.76-.026-.953-.347a.57.57 0 0 1-.066-.456c.1-.48.329-.93.663-1.283.464-.491 1.11-.752 1.754-.882.745-.15 1.508-.157 2.264-.175M6.265 9.789c.322-.018.643-.002.965-.008h8.495c.2 0 .39.136.463.327.057.171.03.356.033.533a.51.51 0 0 1-.498.502h-9.39c-.271.003-.507-.252-.495-.528.007-.178-.028-.369.048-.536a.5.5 0 0 1 .38-.29M20.044 10.52c.203-.07.418.014.587.132.255.181.47.422.632.694a.65.65 0 0 1 .047.6c-.121.306-.376.523-.595.754a2.48 2.48 0 0 1-1.506-1.545c.23-.267.498-.524.835-.636M6.238 12.838a1 1 0 0 1 .092-.01h6.672a.51.51 0 0 1 .503.42c.02.139.007.28.01.42a.52.52 0 0 1-.317.485c-.11.048-.233.036-.35.037H6.357a.51.51 0 0 1-.5-.381c-.032-.15-.015-.305-.018-.457a.52.52 0 0 1 .4-.514"
      opacity={0.5}
    />
  </svg>
);
export default SvgAddForms;
