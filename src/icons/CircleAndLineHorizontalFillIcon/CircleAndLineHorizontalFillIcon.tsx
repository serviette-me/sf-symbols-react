import { IconProps } from "../../types"

export default function CircleAndLineHorizontalFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.521484375 29.859375"
          className={className}
        >
          <path
            d="              M41.5217 14.9431C41.5217 16.2151 40.5367 17.4321 39.0607 17.4321H35.4927C35.6287 16.6251 35.6977 15.7771 35.6977 14.9301C35.6977 14.0821 35.6287 13.2341 35.4927 12.4281H6.0427C7.2327 5.3871 13.3847 0.0001 20.7677 0.0001C28.1367 0.0001 34.2887 5.3871 35.4927 12.4281H39.0607C40.5367 12.4281 41.5217 13.6441 41.5217 14.9431ZM-0.0003 14.9431C-0.0003 13.6441 1.0117 12.4281 2.4887 12.4281H6.0427C5.9067 13.2341 5.8247 14.0821 5.8247 14.9301C5.8247 15.7771 5.9067 16.6251 6.0427 17.4321H35.4927C34.2887 24.4731 28.1367 29.8591 20.7677 29.8591C13.3987 29.8591 7.2327 24.4731 6.0427 17.4321H2.4887C1.0117 17.4321 -0.0003 16.2151 -0.0003 14.9431Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.921875 28.888671875"
          className={className}
        >
          <path
            d="              M39.9217 14.4516C39.9217 15.3806 39.1837 16.2426 38.1587 16.2426H34.2887C34.3577 15.6546 34.3987 15.0526 34.3987 14.4376C34.3987 13.8356 34.3707 13.2346 34.2887 12.6466H5.6327C6.5217 5.5646 12.6327 -0.0004 19.9607 -0.0004C27.2757 -0.0004 33.4007 5.5646 34.2887 12.6466H38.1587C39.1837 12.6466 39.9217 13.5076 39.9217 14.4516ZM-0.0003 14.4516C-0.0003 13.5076 0.7517 12.6466 1.7777 12.6466H5.6327C5.5647 13.2346 5.5237 13.8356 5.5237 14.4376C5.5237 15.0526 5.5647 15.6546 5.6327 16.2426H34.2887C33.3867 23.3246 27.2757 28.8886 19.9607 28.8886C12.6467 28.8886 6.5347 23.3246 5.6327 16.2426H1.7777C0.7517 16.2426 -0.0003 15.3806 -0.0003 14.4516Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.76953125 29.408203125"
          className={className}
        >
          <path
            d="              M40.7697 14.7244C40.7697 15.8324 39.8947 16.8844 38.6227 16.8844H34.9317C35.0277 16.1734 35.0817 15.4494 35.0817 14.7114C35.0817 13.9724 35.0277 13.2484 34.9317 12.5374H5.8517C6.9047 5.4684 13.0297 0.0004 20.3847 0.0004C27.7267 0.0004 33.8657 5.4684 34.9317 12.5374H38.6227C39.8947 12.5374 40.7697 13.5894 40.7697 14.7244ZM-0.0003 14.7244C-0.0003 13.5894 0.8887 12.5374 2.1467 12.5374H5.8517C5.7427 13.2484 5.6877 13.9724 5.6877 14.7114C5.6877 15.4494 5.7427 16.1734 5.8517 16.8844H34.9317C33.8657 23.9394 27.7267 29.4084 20.3847 29.4084C13.0427 29.4084 6.9047 23.9394 5.8517 16.8844H2.1467C0.8887 16.8844 -0.0003 15.8324 -0.0003 14.7244Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.2421875 27.42578125"
          className={className}
        >
          <path
            d="              M37.2427 13.727C37.2427 14.178 36.8727 14.561 36.4357 14.561H32.3207C32.3337 14.287 32.3477 14 32.3477 13.713C32.3477 13.439 32.3337 13.166 32.3207 12.893H4.9357C5.3727 5.756 11.3887 0 18.6207 0C25.8537 0 31.8827 5.756 32.3207 12.893H36.4357C36.8727 12.893 37.2427 13.275 37.2427 13.727ZM-0.0003 13.727C-0.0003 13.275 0.3687 12.893 0.8207 12.893H4.9357C4.9217 13.166 4.9087 13.439 4.9087 13.713C4.9087 14 4.9217 14.287 4.9357 14.561H32.3207C31.8687 21.684 25.8537 27.426 18.6347 27.426C11.4027 27.426 5.3867 21.684 4.9357 14.561H0.8207C0.3687 14.561 -0.0003 14.178 -0.0003 13.727Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.8828125 28.24609375"
          className={className}
        >
          <path
            d="              M38.8827 14.1371C38.8827 14.8481 38.3087 15.4761 37.5707 15.4761H33.5097C33.5507 15.0251 33.5777 14.5741 33.5777 14.1231C33.5777 13.6721 33.5507 13.2341 33.5097 12.7831H5.3867C6.0707 5.6741 12.1547 0.0001 19.4417 0.0001C26.7147 0.0001 32.8267 5.6741 33.5097 12.7831H37.5707C38.3087 12.7831 38.8827 13.4121 38.8827 14.1371ZM-0.0003 14.1371C-0.0003 13.4121 0.5747 12.7831 1.3127 12.7831H5.3867C5.3457 13.2341 5.3317 13.6721 5.3317 14.1231C5.3317 14.5741 5.3457 15.0251 5.3867 15.4761H33.5097C32.8127 22.5861 26.7287 28.2461 19.4547 28.2461C12.1677 28.2461 6.0837 22.5861 5.3867 15.4761H1.3127C0.5747 15.4761 -0.0003 14.8481 -0.0003 14.1371Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.30859375 27.890625"
          className={className}
        >
          <path
            d="              M38.3087 13.9454C38.3087 14.5334 37.8297 15.0394 37.2557 15.0394H33.0587C33.0857 14.6704 33.1137 14.3144 33.1137 13.9454C33.1137 13.5764 33.0997 13.2204 33.0587 12.8654H5.2637C5.8247 5.7284 11.8947 0.0004 19.1547 0.0004C26.4137 0.0004 32.4977 5.7284 33.0587 12.8654H37.2557C37.8297 12.8654 38.3087 13.3574 38.3087 13.9454ZM-0.0003 13.9454C-0.0003 13.3574 0.4787 12.8654 1.0527 12.8654H5.2637C5.2367 13.2204 5.2227 13.5764 5.2227 13.9454C5.2227 14.3144 5.2367 14.6834 5.2637 15.0394H33.0587C32.4977 22.1624 26.4137 27.8904 19.1677 27.8904C11.9087 27.8904 5.8247 22.1624 5.2637 15.0394H1.0527C0.4787 15.0394 -0.0003 14.5334 -0.0003 13.9454Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.333984375 28.51953125"
          className={className}
        >
          <path
            d="              M39.3337 14.2739C39.3337 15.0799 38.6917 15.8049 37.8297 15.8049H33.8517C33.9067 15.2989 33.9337 14.7789 33.9337 14.2599C33.9337 13.7399 33.9067 13.2349 33.8517 12.7289H5.4957C6.2757 5.6189 12.3597 -0.0001 19.6597 -0.0001C26.9607 -0.0001 33.0727 5.6189 33.8517 12.7289H37.8297C38.6917 12.7289 39.3337 13.4529 39.3337 14.2739ZM-0.0003 14.2739C-0.0003 13.4529 0.6567 12.7289 1.5177 12.7289H5.4957C5.4417 13.2349 5.4137 13.7399 5.4137 14.2599C5.4137 14.7789 5.4417 15.2989 5.4957 15.8049H33.8517C33.0727 22.9139 26.9607 28.5199 19.6737 28.5199C12.3727 28.5199 6.2757 22.9139 5.4957 15.8049H1.5177C0.6567 15.8049 -0.0003 15.0799 -0.0003 14.2739Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.84765625 26.810546875"
          className={className}
        >
          <path
            d="              M35.8477 13.4392C35.8477 13.7132 35.6157 13.9452 35.3417 13.9452H31.3227C31.3227 13.7672 31.3357 13.5902 31.3357 13.4122C31.3357 13.2482 31.3227 13.0972 31.3227 12.9332H4.5257C4.7717 5.7832 10.7187 0.0002 17.9237 0.0002C25.1287 0.0002 31.0627 5.7832 31.3227 12.9332H35.3417C35.6157 12.9332 35.8477 13.1662 35.8477 13.4392ZM-0.0003 13.4392C-0.0003 13.1662 0.2327 12.9332 0.5057 12.9332H4.5257C4.5117 13.0972 4.5117 13.2482 4.5117 13.4122C4.5117 13.5902 4.5257 13.7672 4.5257 13.9452H31.3227C31.0347 21.0682 25.1017 26.8102 17.9237 26.8102C10.7327 26.8102 4.8127 21.0682 4.5257 13.9452H0.5057C0.2327 13.9452 -0.0003 13.7132 -0.0003 13.4392Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.123046875 26.49609375"
          className={className}
        >
          <path
            d="              M35.1227 13.2751C35.1227 13.4671 34.9727 13.6171 34.7817 13.6171H30.8027C30.8027 13.4941 30.8167 13.3711 30.8167 13.2481C30.8167 13.1521 30.8167 13.0431 30.8027 12.9471H4.3207C4.4707 5.7971 10.3767 0.0001 17.5547 0.0001C24.7457 0.0001 30.6527 5.7971 30.8027 12.9471H34.7817C34.9727 12.9471 35.1227 13.0981 35.1227 13.2751ZM-0.0003 13.2751C-0.0003 13.0981 0.1507 12.9471 0.3417 12.9471H4.3207C4.3067 13.0431 4.3067 13.1521 4.3067 13.2481C4.3067 13.3711 4.3067 13.4941 4.3207 13.6171H30.8027C30.6117 20.7401 24.7187 26.4961 17.5547 26.4961C10.3907 26.4961 4.5117 20.7401 4.3207 13.6171H0.3417C0.1507 13.6171 -0.0003 13.4671 -0.0003 13.2751Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}