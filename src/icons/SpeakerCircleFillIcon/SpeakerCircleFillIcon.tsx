import { IconProps } from "../../types"

export default function SpeakerCircleFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.873046875"
          className={className}
        >
          <path
            d="              M14.9297 29.8734C23.1597 29.8734 29.8727 23.1604 29.8727 14.9294C29.8727 6.7124 23.1597 0.0004 14.9297 0.0004C6.7127 0.0004 -0.0003 6.7124 -0.0003 14.9294C-0.0003 23.1604 6.7127 29.8734 14.9297 29.8734ZM17.2677 21.1914C16.7617 21.1914 16.4067 21.0134 15.9687 20.5894L13.4117 18.2244C13.3847 18.2104 13.3577 18.2104 13.3297 18.2104H11.5527C10.2817 18.2104 9.5837 17.4724 9.5837 16.1464V13.7264C9.5837 12.4004 10.2817 11.6624 11.5527 11.6624H13.3297C13.3577 11.6624 13.3987 11.6624 13.4257 11.6214L15.9687 9.2834C16.4197 8.8454 16.8167 8.6684 17.2537 8.6684C17.9917 8.6684 18.5527 9.2694 18.5527 10.0074V19.8654C18.5527 20.6034 17.9917 21.1914 17.2677 21.1914Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.875"
          className={className}
        >
          <path
            d="              M14.4377 28.8753C22.3667 28.8753 28.8747 22.3533 28.8747 14.4373C28.8747 6.5083 22.3537 0.0003 14.4377 0.0003C6.5077 0.0003 -0.0003 6.5083 -0.0003 14.4373C-0.0003 22.3533 6.5217 28.8753 14.4377 28.8753ZM16.9117 20.9453C16.4747 20.9453 16.1467 20.7813 15.7497 20.3983L12.8657 17.6773C12.8237 17.6503 12.7557 17.6363 12.7147 17.6363H10.7327C9.5707 17.6363 8.9417 16.9802 8.9417 15.7633V13.1253C8.9417 11.9083 9.5707 11.2653 10.7327 11.2653H12.7147C12.7557 11.2653 12.8237 11.2523 12.8657 11.2113L15.7497 8.5043C16.1877 8.0933 16.4887 7.9432 16.8987 7.9432C17.5277 7.9432 17.9917 8.4353 17.9917 9.0513V19.8513C17.9917 20.4802 17.5277 20.9453 16.9117 20.9453Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.39453125"
          className={className}
        >
          <path
            d="              M14.6977 29.395C22.7777 29.395 29.4077 22.777 29.4077 14.697C29.4077 6.617 22.7777 0 14.6977 0C6.6167 0 -0.0003 6.617 -0.0003 14.697C-0.0003 22.777 6.6167 29.395 14.6977 29.395ZM17.1037 21.082C16.6247 21.082 16.2827 20.904 15.8727 20.508L13.1527 17.965C13.1117 17.951 13.0707 17.937 13.0427 17.937H11.1567C9.9397 17.937 9.2827 17.24 9.2827 15.955V13.453C9.2827 12.168 9.9397 11.471 11.1567 11.471H13.0427C13.0707 11.471 13.1247 11.471 13.1657 11.43L15.8727 8.914C16.3107 8.49 16.6657 8.326 17.0897 8.326C17.7737 8.326 18.2927 8.873 18.2927 9.557V19.865C18.2927 20.549 17.7737 21.082 17.1037 21.082Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 27.4253C21.2187 27.4253 27.4257 21.2323 27.4257 13.7133C27.4257 6.2073 21.2187 0.0003 13.6987 0.0003C6.1937 0.0003 -0.0003 6.2073 -0.0003 13.7133C-0.0003 21.2323 6.2067 27.4253 13.7127 27.4253ZM16.3787 20.3983C16.0647 20.3983 15.8047 20.2753 15.5177 20.0023L12.1547 16.7893C12.0997 16.7483 11.9907 16.7073 11.8947 16.7073H9.5977C8.6817 16.7073 8.1487 16.1603 8.1487 15.2033V12.2913C8.1487 11.3343 8.6817 10.7873 9.5977 10.7873H11.8947C11.9907 10.7873 12.0997 10.7593 12.1547 10.6913L15.5177 7.4783C15.8317 7.1913 16.0507 7.0543 16.3657 7.0543C16.8027 7.0543 17.1037 7.3963 17.1037 7.8203V19.6603C17.1037 20.0843 16.8027 20.3983 16.3787 20.3983Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2465C21.8477 28.2465 28.2457 21.8615 28.2457 14.1235C28.2457 6.3985 21.8477 0.0005 14.1097 0.0005C6.3847 0.0005 -0.0003 6.3985 -0.0003 14.1235C-0.0003 21.8615 6.3987 28.2465 14.1227 28.2465ZM16.6937 20.7945C16.2967 20.7945 15.9827 20.6585 15.6267 20.3025L12.5097 17.3355C12.4547 17.2945 12.3727 17.2815 12.3047 17.2815H10.1987C9.1057 17.2815 8.5317 16.6795 8.5317 15.5315V12.7555C8.5317 11.6075 9.1057 11.0195 10.1987 11.0195H12.3047C12.3727 11.0195 12.4687 10.9925 12.5097 10.9515L15.6267 8.0115C16.0367 7.6285 16.2967 7.4785 16.6797 7.4785C17.2267 7.4785 17.6227 7.9165 17.6227 8.4495V19.8655C17.6227 20.3985 17.2267 20.7945 16.6937 20.7945Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8907C21.5737 27.8907 27.8907 21.5737 27.8907 13.9457C27.8907 6.3297 21.5607 -0.0003 13.9317 -0.0003C6.3167 -0.0003 -0.0003 6.3297 -0.0003 13.9457C-0.0003 21.5737 6.3297 27.8907 13.9457 27.8907ZM16.5567 20.7127C16.1877 20.7127 15.8867 20.5757 15.5447 20.2347L12.3047 17.1307C12.2637 17.0897 12.1547 17.0757 12.0857 17.0757H9.9117C8.8457 17.0757 8.2987 16.5017 8.2987 15.3947V12.5507C8.2987 11.4297 8.8457 10.8687 9.9117 10.8687H12.0857C12.1547 10.8687 12.2637 10.8557 12.3047 10.8007L15.5447 7.7387C15.9417 7.3557 16.1737 7.2187 16.5427 7.2187C17.0487 7.2187 17.4177 7.6147 17.4177 8.1077V19.8517C17.4177 20.3577 17.0487 20.7127 16.5567 20.7127Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.533203125"
          className={className}
        >
          <path
            d="              M14.2597 28.5332C22.0797 28.5332 28.5197 22.0802 28.5197 14.2732C28.5197 6.4532 22.0667 0.0002 14.2457 0.0002C6.4397 0.0002 -0.0003 6.4532 -0.0003 14.2732C-0.0003 22.0802 6.4397 28.5332 14.2597 28.5332ZM16.7887 20.8632C16.3787 20.8632 16.0507 20.7132 15.6817 20.3572L12.6597 17.4862C12.6187 17.4592 12.5367 17.4312 12.4827 17.4312H10.4317C9.3107 17.4312 8.7087 16.8162 8.7087 15.6402V12.9332C8.7087 11.7442 9.3107 11.1292 10.4317 11.1292H12.4827C12.5367 11.1292 12.6187 11.1152 12.6597 11.0742L15.6817 8.2302C16.0917 7.8342 16.3787 7.6832 16.7757 7.6832C17.3497 7.6832 17.7737 8.1482 17.7737 8.7222V19.8652C17.7737 20.4392 17.3497 20.8632 16.7887 20.8632Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 26.8109C20.7677 26.8109 26.8107 20.7679 26.8107 13.3989C26.8107 6.0429 20.7677 -0.0001 13.3987 -0.0001C6.0427 -0.0001 -0.0003 6.0429 -0.0003 13.3989C-0.0003 20.7679 6.0427 26.8109 13.4117 26.8109ZM16.1187 19.9749C15.8867 19.9749 15.6817 19.8649 15.4767 19.6879L11.9627 16.3379C11.8807 16.2699 11.7717 16.2149 11.6487 16.2149H9.2007C8.4627 16.2149 7.9297 15.6949 7.9297 14.9429V11.9359C7.9297 11.1969 8.4627 10.6639 9.2007 10.6639H11.6487C11.7717 10.6639 11.8807 10.6229 11.9627 10.5409L15.4767 7.1369C15.6957 6.9449 15.8867 6.8359 16.1187 6.8359C16.4747 6.8359 16.6797 7.0959 16.6797 7.4379V19.3869C16.6797 19.7289 16.4747 19.9749 16.1187 19.9749Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 26.4965C20.5347 26.4965 26.4957 20.5355 26.4957 13.2485C26.4957 5.9605 20.5347 0.0005 13.2477 0.0005C5.9607 0.0005 -0.0003 5.9605 -0.0003 13.2485C-0.0003 20.5355 5.9607 26.4965 13.2477 26.4965ZM15.9957 19.7695C15.8047 19.7695 15.6137 19.6735 15.4627 19.5375L11.8537 16.1055C11.7717 16.0375 11.6617 15.9825 11.5257 15.9825H8.9827C8.3537 15.9825 7.8337 15.4625 7.8337 14.8205V11.7715C7.8337 11.1285 8.3537 10.6095 8.9827 10.6095H11.5257C11.6617 10.6095 11.7717 10.5685 11.8537 10.4865L15.4627 6.9725C15.6137 6.8355 15.8047 6.7265 15.9957 6.7265C16.2967 6.7265 16.4607 6.9455 16.4607 7.2465V19.2505C16.4607 19.5505 16.2967 19.7695 15.9957 19.7695Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}