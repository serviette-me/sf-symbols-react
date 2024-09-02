import { IconProps } from "../../types"

export default function CircleAndLineHorizontalIconIcon({
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
            d="              M-0.0003 14.9431C-0.0003 16.2151 1.0117 17.4321 2.4887 17.4321H6.0427C7.2327 24.4731 13.3987 29.8591 20.7677 29.8591C28.1367 29.8591 34.2887 24.4731 35.4927 17.4321H39.0607C40.5367 17.4321 41.5217 16.2151 41.5217 14.9431C41.5217 13.6441 40.5367 12.4281 39.0607 12.4281H35.4927C34.2887 5.3871 28.1367 0.0001 20.7677 0.0001C13.3847 0.0001 7.2327 5.3871 6.0427 12.4281H2.4887C1.0117 12.4281 -0.0003 13.6441 -0.0003 14.9431ZM20.7677 4.8671C25.4567 4.8671 29.4087 8.0801 30.5157 12.4281H11.0057C12.1267 8.0801 16.0647 4.8671 20.7677 4.8671ZM20.7677 24.9921C16.0647 24.9921 12.1267 21.7931 11.0057 17.4321H30.5157C29.4087 21.7931 25.4707 24.9921 20.7677 24.9921Z"
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
            d="              M-0.0003 14.4516C-0.0003 15.3806 0.7517 16.2426 1.7777 16.2426H5.6327C6.5347 23.3246 12.6467 28.8886 19.9607 28.8886C27.2757 28.8886 33.3867 23.3246 34.2887 16.2426H38.1587C39.1837 16.2426 39.9217 15.3806 39.9217 14.4516C39.9217 13.5076 39.1837 12.6466 38.1587 12.6466H34.2887C33.4007 5.5646 27.2757 -0.0004 19.9607 -0.0004C12.6327 -0.0004 6.5217 5.5646 5.6327 12.6466H1.7777C0.7517 12.6466 -0.0003 13.5076 -0.0003 14.4516ZM19.9607 3.5956C25.3477 3.5956 29.8047 7.5056 30.6657 12.6466H9.2697C10.1177 7.5056 14.5607 3.5956 19.9607 3.5956ZM19.9607 25.2926C14.5747 25.2926 10.1307 21.3826 9.2697 16.2426H30.6657C29.8047 21.3826 25.3617 25.2926 19.9607 25.2926Z"
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
            d="              M-0.0003 14.7244C-0.0003 15.8324 0.8887 16.8844 2.1467 16.8844H5.8517C6.9047 23.9394 13.0427 29.4084 20.3847 29.4084C27.7267 29.4084 33.8657 23.9394 34.9317 16.8844H38.6227C39.8947 16.8844 40.7697 15.8324 40.7697 14.7244C40.7697 13.5894 39.8947 12.5374 38.6227 12.5374H34.9317C33.8657 5.4684 27.7267 0.0004 20.3847 0.0004C13.0297 0.0004 6.9047 5.4684 5.8517 12.5374H2.1467C0.8887 12.5374 -0.0003 13.5894 -0.0003 14.7244ZM20.3847 4.2794C25.4157 4.2794 29.5997 7.8064 30.5977 12.5374H10.1857C11.1697 7.8064 15.3537 4.2794 20.3847 4.2794ZM20.3847 25.1424C15.3537 25.1424 11.1837 21.6014 10.1857 16.8844H30.5977C29.5997 21.6014 25.4157 25.1424 20.3847 25.1424Z"
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
            d="              M-0.0003 13.727C-0.0003 14.178 0.3687 14.561 0.8207 14.561H4.9357C5.3867 21.684 11.4027 27.426 18.6347 27.426C25.8537 27.426 31.8687 21.684 32.3207 14.561H36.4357C36.8727 14.561 37.2427 14.178 37.2427 13.727C37.2427 13.275 36.8727 12.893 36.4357 12.893H32.3207C31.8827 5.756 25.8537 0 18.6207 0C11.3887 0 5.3727 5.756 4.9357 12.893H0.8207C0.3687 12.893 -0.0003 13.275 -0.0003 13.727ZM18.6207 1.764C24.9517 1.764 30.1187 6.658 30.5427 12.893H6.7267C7.1367 6.658 12.2777 1.764 18.6207 1.764ZM18.6347 25.648C12.3047 25.648 7.1637 20.781 6.7267 14.561H30.5427C30.1057 20.781 24.9517 25.648 18.6347 25.648Z"
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
            d="              M-0.0003 14.1371C-0.0003 14.8481 0.5747 15.4761 1.3127 15.4761H5.3867C6.0837 22.5861 12.1677 28.2461 19.4547 28.2461C26.7287 28.2461 32.8127 22.5861 33.5097 15.4761H37.5707C38.3087 15.4761 38.8827 14.8481 38.8827 14.1371C38.8827 13.4121 38.3087 12.7831 37.5707 12.7831H33.5097C32.8267 5.6741 26.7147 0.0001 19.4417 0.0001C12.1547 0.0001 6.0707 5.6741 5.3867 12.7831H1.3127C0.5747 12.7831 -0.0003 13.4121 -0.0003 14.1371ZM19.4417 2.7891C25.2797 2.7891 30.0507 7.1371 30.7207 12.7831H8.2027C8.8457 7.1371 13.6037 2.7891 19.4417 2.7891ZM19.4547 25.4711C13.6177 25.4711 8.8597 21.1231 8.2027 15.4761H30.7067C30.0507 21.1231 25.2797 25.4711 19.4547 25.4711Z"
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
            d="              M-0.0003 13.9454C-0.0003 14.5334 0.4787 15.0394 1.0527 15.0394H5.2637C5.8247 22.1624 11.9087 27.8904 19.1677 27.8904C26.4137 27.8904 32.4977 22.1624 33.0587 15.0394H37.2557C37.8297 15.0394 38.3087 14.5334 38.3087 13.9454C38.3087 13.3574 37.8297 12.8654 37.2557 12.8654H33.0587C32.4977 5.7284 26.4137 0.0004 19.1547 0.0004C11.8947 0.0004 5.8247 5.7284 5.2637 12.8654H1.0527C0.4787 12.8654 -0.0003 13.3574 -0.0003 13.9454ZM19.1547 2.3244C25.2387 2.3244 30.1877 6.9314 30.7347 12.8654H7.6017C8.1347 6.9314 13.0567 2.3244 19.1547 2.3244ZM19.1677 25.5664C13.0837 25.5664 8.1487 20.9724 7.6017 15.0394H30.7347C30.1877 20.9724 25.2387 25.5664 19.1677 25.5664Z"
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
            d="              M-0.0003 14.2739C-0.0003 15.0799 0.6567 15.8049 1.5177 15.8049H5.4957C6.2757 22.9139 12.3727 28.5199 19.6737 28.5199C26.9607 28.5199 33.0727 22.9139 33.8517 15.8049H37.8297C38.6917 15.8049 39.3337 15.0799 39.3337 14.2739C39.3337 13.4529 38.6917 12.7289 37.8297 12.7289H33.8517C33.0727 5.6189 26.9607 -0.0001 19.6597 -0.0001C12.3597 -0.0001 6.2757 5.6189 5.4957 12.7289H1.5177C0.6567 12.7289 -0.0003 13.4529 -0.0003 14.2739ZM19.6597 3.1309C25.3067 3.1309 29.9547 7.2869 30.6937 12.7289H8.6547C9.3927 7.2869 14.0137 3.1309 19.6597 3.1309ZM19.6737 25.3889C14.0277 25.3889 9.4067 21.2329 8.6547 15.8049H30.6937C29.9417 21.2329 25.3207 25.3889 19.6737 25.3889Z"
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
            d="              M-0.0003 13.4392C-0.0003 13.7132 0.2327 13.9452 0.5057 13.9452H4.5257C4.8127 21.0682 10.7327 26.8102 17.9237 26.8102C25.1017 26.8102 31.0347 21.0682 31.3227 13.9452H35.3417C35.6157 13.9452 35.8477 13.7132 35.8477 13.4392C35.8477 13.1662 35.6157 12.9332 35.3417 12.9332H31.3227C31.0627 5.7832 25.1287 0.0002 17.9237 0.0002C10.7187 0.0002 4.7717 5.7832 4.5257 12.9332H0.5057C0.2327 12.9332 -0.0003 13.1662 -0.0003 13.4392ZM17.9237 1.0392C24.5817 1.0392 30.0237 6.3302 30.2837 12.9332H5.5647C5.8247 6.3302 11.2517 1.0392 17.9237 1.0392ZM17.9237 25.7712C11.2797 25.7712 5.8517 20.5212 5.5777 13.9452H30.2837C29.9957 20.5212 24.5687 25.7712 17.9237 25.7712Z"
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
            d="              M-0.0003 13.2751C-0.0003 13.4671 0.1507 13.6171 0.3417 13.6171H4.3207C4.5117 20.7401 10.3907 26.4961 17.5547 26.4961C24.7187 26.4961 30.6117 20.7401 30.8027 13.6171H34.7817C34.9727 13.6171 35.1227 13.4671 35.1227 13.2751C35.1227 13.0981 34.9727 12.9471 34.7817 12.9471H30.8027C30.6527 5.7971 24.7457 0.0001 17.5547 0.0001C10.3767 0.0001 4.4707 5.7971 4.3207 12.9471H0.3417C0.1507 12.9471 -0.0003 13.0981 -0.0003 13.2751ZM17.5547 0.6701C24.3907 0.6701 29.9827 6.1521 30.1327 12.9471H4.9767C5.1407 6.1521 10.7187 0.6701 17.5547 0.6701ZM17.5547 25.8261C10.7457 25.8261 5.1817 20.3851 4.9907 13.6171H30.1327C29.9417 20.3851 24.3767 25.8261 17.5547 25.8261Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
