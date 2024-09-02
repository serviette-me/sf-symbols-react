import { IconProps } from "../../types"

export default function FigureHandCyclingIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.282620237875143 33.00390625"
          className={className}
        >
          <path
            d="              M6.4111 6.904C8.3121 6.904 9.8701 5.359 9.8701 3.459C9.8701 1.559 8.3121 0 6.4111 0C4.5111 0 2.9661 1.559 2.9661 3.459C2.9661 5.359 4.5111 6.904 6.4111 6.904ZM16.2011 33.004H24.3491C25.7161 33.004 26.1811 31.24 25.0331 30.488L22.5991 28.861C22.7771 28.492 22.9001 28.082 23.0091 27.672L26.2771 14.615C28.5331 14.355 30.2831 12.455 30.2831 10.131C30.2831 7.629 28.2591 5.605 25.7571 5.605C23.2551 5.605 21.2451 7.629 21.2451 10.131C21.2451 11.84 22.1891 13.316 23.5831 14.082L20.3571 27.016C19.8651 28.998 18.2381 30.269 16.2011 30.269C15.4211 30.269 14.8201 30.926 14.8201 31.637C14.8201 32.348 15.4211 33.004 16.2011 33.004ZM11.4701 31.828C12.3311 32.074 13.3571 31.623 13.6441 30.57L15.8311 22.641C16.1591 21.465 15.6541 20.562 14.4511 20.221L8.3261 18.471L8.7901 13.316L11.6201 15.326C12.2491 15.791 13.0701 15.791 13.7121 15.326L18.8671 11.662C19.6591 11.102 19.8651 9.967 19.2771 9.174C18.7161 8.34 17.5681 8.189 16.7611 8.75L12.6731 11.689L9.3371 9.283C8.5441 8.723 7.5741 8.299 6.3981 8.299C4.3471 8.299 2.7881 9.611 2.6651 11.443L2.1871 18.348C2.0231 20.549 3.1301 22.217 5.6051 22.572L11.8801 23.488L10.1991 29.641C9.9111 30.68 10.5131 31.582 11.4701 31.828ZM25.7571 11.935C24.7451 11.935 23.9521 11.143 23.9521 10.131C23.9521 9.119 24.7451 8.312 25.7571 8.312C26.7831 8.312 27.5761 9.119 27.5761 10.131C27.5761 11.143 26.7831 11.935 25.7571 11.935ZM1.3941 33.004H7.6691C8.4491 33.004 9.0361 32.348 9.0361 31.637C9.0361 30.926 8.4491 30.269 7.6691 30.269C6.9861 30.269 6.4661 29.873 6.3291 29.189L5.7281 26.523L6.5071 26.359C7.1221 26.236 7.4921 25.676 7.4921 25.102C7.4921 24.473 7.0131 23.967 6.4391 23.871L1.5581 23.037C0.3271 22.832 -0.2189 24.035 0.2181 24.869L0.5051 25.416C1.0251 26.428 1.8721 27.084 3.0341 27.043L3.4041 28.684L0.6421 30.488C-0.5069 31.24 -0.0279 33.004 1.3941 33.004Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.008299392911194 31.076171875"
          className={className}
        >
          <path
            d="              M5.6003 6.4397C7.3633 6.4397 8.8133 5.0037 8.8133 3.2267C8.8133 1.4497 7.3633 -0.0003 5.6003 -0.0003C3.8223 -0.0003 2.3733 1.4497 2.3733 3.2267C2.3733 5.0037 3.8223 6.4397 5.6003 6.4397ZM14.5823 31.0757H22.5123C23.5783 31.0757 23.9203 29.7087 23.0313 29.1207L20.4613 27.3987C20.6943 27.0017 20.8303 26.5647 20.9533 26.0997L24.1393 13.3707C26.2853 13.2347 28.0083 11.4437 28.0083 9.2557C28.0083 6.9867 26.1493 5.1407 23.8793 5.1407C21.5963 5.1407 19.7643 6.9867 19.7643 9.2557C19.7643 10.8687 20.6803 12.2637 22.0333 12.9477L18.8753 25.5797C18.3833 27.6037 16.6743 28.9297 14.5823 28.9297C13.9673 28.9297 13.5163 29.4497 13.5163 30.0097C13.5163 30.5707 13.9673 31.0757 14.5823 31.0757ZM23.8793 11.2657C22.7443 11.2657 21.8693 10.3907 21.8693 9.2557C21.8693 8.1347 22.7443 7.2597 23.8793 7.2597C25.0143 7.2597 25.8893 8.1347 25.8893 9.2557C25.8893 10.3907 25.0143 11.2657 23.8793 11.2657ZM10.4813 30.4337C11.2333 30.6387 12.1493 30.2557 12.4083 29.3127L14.5413 21.6017C14.8283 20.5347 14.3773 19.7417 13.2973 19.4277L7.2273 17.7047L7.7053 12.4137C7.7193 12.2777 7.6923 12.2907 7.8013 12.3727L10.6723 14.4237C11.2333 14.8337 11.9573 14.8337 12.5313 14.4237L17.5353 10.8557C18.2463 10.3497 18.4243 9.3517 17.9043 8.6407C17.3993 7.9027 16.4013 7.7517 15.6763 8.2577L11.6153 11.1837L8.2793 8.7907C7.5283 8.2437 6.6123 7.8617 5.5043 7.8617C3.5903 7.8617 2.1543 9.0647 2.0453 10.7737L1.5673 17.4727C1.4163 19.5367 2.4423 21.0957 4.7663 21.4377L11.0283 22.3397L9.3463 28.4787C9.0863 29.4087 9.6193 30.2007 10.4813 30.4337ZM1.0883 31.0757H7.1863C7.8013 31.0757 8.2663 30.5707 8.2663 30.0097C8.2663 29.4357 7.8013 28.9297 7.1863 28.9297C6.4063 28.9297 5.8193 28.5607 5.6273 27.6857L5.0533 25.0747L6.0243 24.8687C6.4883 24.7737 6.7893 24.3357 6.7893 23.8847C6.7893 23.3927 6.4203 22.9957 5.9693 22.9277L1.2253 22.1207C0.2273 21.9437 -0.1697 22.8867 0.1723 23.5427L0.4463 24.0757C0.9513 25.0747 1.7723 25.6617 2.9473 25.5117L3.3303 27.2477L0.5003 29.1207C-0.3877 29.7087 -0.0327 31.0757 1.0883 31.0757Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.199171796495 32.087890625"
          className={className}
        >
          <path
            d="              M6.0257 6.6859C7.8707 6.6859 9.3617 5.1819 9.3617 3.3359C9.3617 1.4899 7.8707 -0.0001 6.0257 -0.0001C4.1797 -0.0001 2.6757 1.4899 2.6757 3.3359C2.6757 5.1819 4.1797 6.6859 6.0257 6.6859ZM15.4317 32.0879H23.4847C24.7147 32.0879 25.1117 30.5159 24.0857 29.8319L21.5837 28.1639C21.7887 27.7809 21.9257 27.3579 22.0347 26.9199L25.2617 14.0269C27.4767 13.8219 29.1987 11.9629 29.1987 9.7069C29.1987 7.3149 27.2577 5.3869 24.8787 5.3869C22.4727 5.3869 20.5447 7.3149 20.5447 9.7069C20.5447 11.3749 21.4747 12.8109 22.8557 13.5489L19.6557 26.3319C19.1637 28.3279 17.4957 29.6269 15.4317 29.6269C14.7347 29.6269 14.2007 30.2149 14.2007 30.8579C14.2007 31.4999 14.7347 32.0879 15.4317 32.0879ZM24.8787 11.6209C23.7987 11.6209 22.9647 10.7869 22.9647 9.7069C22.9647 8.6409 23.7987 7.8069 24.8787 7.8069C25.9457 7.8069 26.7797 8.6409 26.7797 9.7069C26.7797 10.7869 25.9457 11.6209 24.8787 11.6209ZM11.0017 31.1579C11.8087 31.3909 12.7797 30.9669 13.0667 29.9689L15.2267 22.1349C15.5277 21.0139 15.0487 20.1659 13.9007 19.8379L7.8027 18.1019L8.2807 12.8379L11.1657 14.8889C11.7677 15.3259 12.5467 15.3259 13.1487 14.8889L18.2477 11.2789C18.9997 10.7329 19.1777 9.6659 18.6307 8.9139C18.0977 8.1209 17.0177 7.9709 16.2517 8.5179L12.1777 11.4429L8.8417 9.0509C8.0627 8.4899 7.1187 8.0799 5.9847 8.0799C3.9887 8.0799 2.4977 9.3519 2.3747 11.1149L1.8967 17.9239C1.7457 20.0699 2.7987 21.6839 5.2047 22.0259L11.4807 22.9419L9.7987 29.0799C9.5257 30.0779 10.0857 30.9259 11.0017 31.1579ZM1.2537 32.0879H7.4477C8.1447 32.0879 8.6777 31.4999 8.6777 30.8579C8.6777 30.2149 8.1447 29.6269 7.4477 29.6269C6.7087 29.6269 6.1617 29.2439 5.9977 28.4789L5.4097 25.8399L6.2847 25.6489C6.8187 25.5389 7.1597 25.0329 7.1597 24.5139C7.1597 23.9529 6.7367 23.5019 6.2167 23.4199L1.4047 22.5999C0.2697 22.4079 -0.1953 23.4749 0.2007 24.2399L0.4747 24.7739C0.9807 25.7849 1.8277 26.4139 2.9897 26.3179L3.3727 27.9999L0.5837 29.8319C-0.4553 30.5159 -0.0313 32.0879 1.2537 32.0879Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.77539164137071 28.375185193772104"
          className={className}
        >
          <path
            d="              M4.5406 5.8109C6.1406 5.8109 7.4396 4.5119 7.4396 2.9119C7.4396 1.3129 6.1406 -0.0001 4.5406 -0.0001C2.9276 -0.0001 1.6286 1.3129 1.6286 2.9119C1.6286 4.5119 2.9276 5.8109 4.5406 5.8109ZM12.4976 28.3419H19.9906C20.6326 28.3419 20.7836 27.5219 20.2776 27.1799L17.5426 25.3609C17.8436 24.9239 18.0076 24.4589 18.1586 23.9119L21.2066 11.7309C21.2346 11.7309 21.2616 11.7309 21.2886 11.7309C23.2036 11.7309 24.7756 10.1579 24.7756 8.2439C24.7756 6.3299 23.2036 4.7849 21.2886 4.7849C19.3616 4.7849 17.8166 6.3299 17.8166 8.2439C17.8166 9.6929 18.7046 10.9379 19.9626 11.4709L16.9276 23.6249C16.4216 25.6619 14.6306 27.0569 12.4976 27.0569C12.1286 27.0569 11.8696 27.3579 11.8696 27.6989C11.8696 28.0409 12.1286 28.3419 12.4976 28.3419ZM21.2886 10.4859C20.0036 10.4859 19.0466 9.5429 19.0466 8.2439C19.0466 6.9729 20.0036 6.0159 21.2886 6.0159C22.5746 6.0159 23.5316 6.9729 23.5316 8.2439C23.5316 9.5429 22.5746 10.4859 21.2886 10.4859ZM9.1206 28.3279C9.7636 28.5059 10.5426 28.1779 10.7616 27.3849L12.7716 20.0839C13.0176 19.1539 12.6346 18.4979 11.7046 18.2379L5.8396 16.5699L6.3046 11.4429C6.3316 11.2789 6.5096 11.1839 6.6466 11.2789L9.3396 13.2349C9.8316 13.5759 10.4476 13.5759 10.9256 13.2349L15.6566 9.8579C16.2716 9.4199 16.4086 8.5859 15.9706 7.9569C15.5336 7.3559 14.6856 7.2189 14.0836 7.6429L10.1466 10.4729L6.9066 8.1489C6.2226 7.6429 5.3886 7.3009 4.3766 7.3009C2.6546 7.3009 1.3696 8.3809 1.2596 9.9119L0.8086 16.2419C0.6856 18.1289 1.5876 19.5239 3.6936 19.8239L9.7776 20.6989L8.1506 26.6739C7.9316 27.4669 8.3826 28.1229 9.1206 28.3279ZM0.6586 28.3419H6.4276C6.7966 28.3419 7.0566 28.0549 7.0566 27.6989C7.0566 27.3439 6.7966 27.0569 6.4276 27.0569C5.4976 27.0569 4.8146 26.7009 4.5686 25.5799L4.0076 23.0239L5.2516 22.7499C5.5526 22.6949 5.7306 22.4359 5.7306 22.1349C5.7306 21.8199 5.5116 21.5879 5.2246 21.5469L0.7406 20.7809C0.0706 20.6719 -0.1344 21.2189 0.0836 21.6839L0.3296 22.1899C0.7676 23.1189 1.4926 23.5569 2.5996 23.3109L2.7776 23.2829L3.2016 25.2789L0.3026 27.1799C-0.2034 27.5219 -0.0524 28.3419 0.6586 28.3419Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.542607009128094 29.845703125"
          className={className}
        >
          <path
            d="              M5.0645 6.1521C6.7595 6.1521 8.1405 4.7711 8.1405 3.0761C8.1405 1.3811 6.7595 0.0001 5.0645 0.0001C3.3685 0.0001 2.0015 1.3811 2.0015 3.0761C2.0015 4.7711 3.3685 6.1521 5.0645 6.1521ZM13.5405 29.8461H21.3335C22.2085 29.8461 22.4685 28.7241 21.7435 28.2461L19.0915 26.4691C19.3515 26.0451 19.5155 25.5941 19.6385 25.0881L22.7695 12.5641C24.8475 12.5231 26.5425 10.7871 26.5425 8.7091C26.5425 6.5621 24.8065 4.8401 22.6735 4.8401C20.5265 4.8401 18.8045 6.5621 18.8045 8.7091C18.8045 10.2401 19.7205 11.5941 21.0465 12.2091L17.9295 24.6781C17.4235 26.7151 15.6595 28.0821 13.5405 28.0821C13.0485 28.0821 12.6655 28.4921 12.6655 28.9711C12.6655 29.4351 13.0485 29.8461 13.5405 29.8461ZM22.6735 10.8421C21.4705 10.8421 20.5405 9.9121 20.5405 8.7091C20.5405 7.5061 21.4705 6.5761 22.6735 6.5761C23.8905 6.5761 24.8195 7.5061 24.8195 8.7091C24.8195 9.9121 23.8905 10.8421 22.6735 10.8421ZM9.8355 29.5311C10.5465 29.7361 11.3805 29.3671 11.6125 28.5061L13.7045 20.9321C13.9785 19.9331 13.5685 19.2231 12.5565 18.9351L6.5135 17.2131L6.9915 11.9351C7.0055 11.7851 7.1285 11.7301 7.2515 11.8261L10.0685 13.8361C10.5875 14.2191 11.2575 14.2191 11.7765 13.8361L16.6855 10.3361C17.3415 9.8711 17.5055 8.9551 17.0265 8.2851C16.5625 7.6291 15.6465 7.4781 14.9765 7.9431L10.9295 10.8551L7.5935 8.4631C6.8825 7.9431 6.0075 7.5741 4.9415 7.5741C3.1095 7.5741 1.7555 8.7231 1.6325 10.3361L1.1675 16.9121C1.0305 18.9081 2.0015 20.3851 4.2165 20.6991L10.4785 21.6011L8.7965 27.7401C8.5645 28.6011 9.0565 29.3121 9.8355 29.5311ZM0.9075 29.8461H6.8965C7.3885 29.8461 7.7715 29.4351 7.7715 28.9711C7.7715 28.4921 7.3885 28.0821 6.8965 28.0821C6.0345 28.0821 5.4055 27.7131 5.1875 26.7281L4.6125 24.1441L5.7065 23.9121C6.0895 23.8301 6.3355 23.4881 6.3355 23.1051C6.3355 22.6951 6.0345 22.3811 5.6655 22.3261L1.0035 21.5331C0.1695 21.3831 -0.1315 22.1481 0.1425 22.7091L0.4015 23.2281C0.9075 24.2131 1.7145 24.7461 2.8905 24.5001L3.3005 26.3461L0.4155 28.2461C-0.3085 28.7241 -0.0495 29.8461 0.9075 29.8461Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.72027181526561 29.1484375"
          className={className}
        >
          <path
            d="              M4.7745 5.9743C6.4295 5.9743 7.7555 4.6483 7.7555 2.9943C7.7555 1.3403 6.4295 0.0003 4.7745 0.0003C3.1205 0.0003 1.7805 1.3403 1.7805 2.9943C1.7805 4.6483 3.1205 5.9743 4.7745 5.9743ZM12.9645 29.1483H20.6615C21.4415 29.1483 21.6595 28.1643 21.0305 27.7403L18.3235 25.9493C18.5975 25.5113 18.7745 25.0333 18.8985 24.5133L22.0015 12.1133C24.0385 12.1133 25.7205 10.4313 25.7205 8.3813C25.7205 6.3303 24.0385 4.6753 22.0015 4.6753C19.9375 4.6753 18.2695 6.3303 18.2695 8.3813C18.2695 9.8983 19.1855 11.2113 20.4835 11.7853L17.3945 24.1583C16.8885 26.2093 15.0975 27.6033 12.9645 27.6033C12.5265 27.6033 12.1985 27.9593 12.1985 28.3823C12.1985 28.7933 12.5265 29.1483 12.9645 29.1483ZM22.0015 10.5953C20.7435 10.5953 19.7865 9.6383 19.7865 8.3813C19.7865 7.1503 20.7435 6.1933 22.0015 6.1933C23.2455 6.1933 24.2025 7.1503 24.2025 8.3813C24.2025 9.6383 23.2455 10.5953 22.0015 10.5953ZM9.4785 29.0253C10.1485 29.2163 10.9545 28.8753 11.1735 28.0543L13.2375 20.5623C13.4975 19.6053 13.1015 18.9223 12.1445 18.6483L6.1285 16.9393L6.5935 11.6623C6.6205 11.4983 6.8125 11.4023 6.9355 11.5113L9.7245 13.5073C10.2165 13.8633 10.8455 13.8633 11.3515 13.5073L16.2045 10.0353C16.8335 9.5973 16.9835 8.7223 16.5325 8.0933C16.0955 7.4653 15.2205 7.3283 14.5915 7.7653L10.5445 10.6773L7.2085 8.2853C6.5115 7.7653 5.6635 7.4103 4.6105 7.4103C2.8475 7.4103 1.5215 8.5173 1.4115 10.0903L0.9465 16.5973C0.8105 18.5393 1.7535 19.9743 3.9135 20.2893L10.1615 21.1913L8.4935 27.3163C8.2745 28.1363 8.7265 28.8203 9.4785 29.0253ZM2.7925 23.9533L2.8605 23.9393L3.2715 25.8263L0.3725 27.7403C-0.2695 28.1643 -0.0515 29.1483 0.7965 29.1483H6.7165C7.1675 29.1483 7.4955 28.7933 7.4955 28.3823C7.4955 27.9593 7.1675 27.6033 6.7165 27.6033C5.8275 27.6033 5.1715 27.2483 4.9395 26.1813L4.3785 23.6113L5.5265 23.3653C5.8685 23.3103 6.0735 22.9963 6.0735 22.6543C6.0735 22.2983 5.8145 22.0253 5.4995 21.9843L0.8925 21.1913C0.1265 21.0683 -0.1055 21.7243 0.1265 22.2303L0.3865 22.7363C0.8645 23.7203 1.6445 24.1993 2.7925 23.9533Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.166250076197638 30.37890625"
          className={className}
        >
          <path
            d="              M5.2912 6.2749C7.0142 6.2749 8.4222 4.8669 8.4222 3.1309C8.4222 1.4079 7.0142 -0.0001 5.2912 -0.0001C3.5552 -0.0001 2.1462 1.4079 2.1462 3.1309C2.1462 4.8669 3.5552 6.2749 5.2912 6.2749ZM13.9862 30.3789H21.8342C22.8052 30.3789 23.0922 29.1489 22.2992 28.6149L19.6742 26.8789C19.9202 26.4549 20.0702 26.0039 20.1932 25.5259L23.3522 12.9199C25.4712 12.8239 27.1662 11.0739 27.1662 8.9419C27.1662 6.7399 25.3752 4.9769 23.1882 4.9769C20.9862 4.9769 19.2092 6.7399 19.2092 8.9419C19.2092 10.5139 20.1252 11.8809 21.4652 12.5239L18.3342 25.0609C17.8282 27.0979 16.0922 28.4509 13.9862 28.4509C13.4392 28.4509 13.0292 28.9019 13.0292 29.4219C13.0292 29.9279 13.4392 30.3789 13.9862 30.3789ZM23.1882 11.0199C22.0122 11.0199 21.1092 10.1169 21.1092 8.9419C21.1092 7.7789 22.0122 6.8629 23.1882 6.8629C24.3632 6.8629 25.2662 7.7789 25.2662 8.9419C25.2662 10.1169 24.3632 11.0199 23.1882 11.0199ZM10.1042 29.9139C10.8422 30.1189 11.7032 29.7499 11.9492 28.8609L14.0552 21.2189C14.3422 20.1929 13.9042 19.4419 12.8652 19.1539L6.8092 17.4319L7.3012 12.1409C7.3142 11.9899 7.3692 11.9629 7.4792 12.0589L10.3222 14.0959C10.8552 14.4789 11.5532 14.4789 12.0862 14.0959L17.0492 10.5549C17.7322 10.0759 17.8962 9.1189 17.4042 8.4359C16.9262 7.7379 15.9552 7.6019 15.2712 8.0799L11.2112 10.9919L7.8892 8.5999C7.1502 8.0669 6.2622 7.6969 5.1822 7.6969C3.3092 7.6969 1.9282 8.8729 1.8052 10.5269L1.3402 17.1579C1.1892 19.1819 2.1882 20.6859 4.4432 21.0139L10.7052 21.9159L9.0372 28.0549C8.7912 28.9429 9.2972 29.6949 10.1042 29.9139ZM0.9712 30.3789H7.0142C7.5612 30.3789 7.9842 29.9279 7.9842 29.4219C7.9842 28.9019 7.5612 28.4509 7.0142 28.4509C6.1802 28.4509 5.5782 28.0819 5.3732 27.1389L4.7992 24.5409L5.8382 24.3219C6.2622 24.2399 6.5212 23.8439 6.5212 23.4339C6.5212 22.9959 6.1932 22.6409 5.7972 22.5859L1.0942 21.7789C0.1912 21.6289 -0.1498 22.4629 0.1502 23.0649L0.4102 23.5979C0.9162 24.5959 1.7362 25.1429 2.9122 24.9379L3.3092 26.7419L0.4512 28.6149C-0.3418 29.1489 -0.0408 30.3789 0.9712 30.3789Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.566956224199444 27.445650293226368"
          className={className}
        >
          <path
            d="              M4.2756 5.5913C5.8076 5.5913 7.0646 4.3343 7.0646 2.7893C7.0646 1.2573 5.8076 0.0003 4.2756 0.0003C2.7306 0.0003 1.4736 1.2573 1.4736 2.7893C1.4736 4.3343 2.7306 5.5913 4.2756 5.5913ZM11.9456 27.2483H19.1506C19.6156 27.2483 19.6976 26.6603 19.3556 26.4413L16.5666 24.5823C16.9086 24.1313 17.0726 23.6793 17.2236 23.0913L20.2306 11.2113C20.2856 11.2113 20.3536 11.2113 20.4086 11.2113C22.1586 11.2113 23.5666 9.8023 23.5666 8.0523C23.5666 6.3163 22.1586 4.9083 20.4086 4.9083C18.6726 4.9083 17.2646 6.3163 17.2646 8.0523C17.2646 9.4203 18.1256 10.5823 19.3426 11.0193L16.3756 22.9143C15.8696 24.9373 14.0646 26.3323 11.9456 26.3323C11.6856 26.3323 11.4946 26.5373 11.4946 26.7973C11.4946 27.0433 11.6856 27.2483 11.9456 27.2483ZM20.4086 10.3363C19.0826 10.3363 18.1256 9.3923 18.1256 8.0523C18.1256 6.7263 19.0826 5.7833 20.4086 5.7833C21.7486 5.7833 22.6916 6.7263 22.6916 8.0523C22.6916 9.3923 21.7486 10.3363 20.4086 10.3363ZM8.6916 27.3983C9.3076 27.5763 10.0596 27.2483 10.2646 26.4823L12.2056 19.4553C12.4516 18.5663 12.0826 17.9233 11.1806 17.6773L5.5336 16.0783L5.9846 11.1293C5.9986 10.9783 6.1766 10.8823 6.2996 10.9783L8.8966 12.8513C9.3756 13.1933 9.9636 13.1933 10.4286 12.8513L14.9806 9.6113C15.5686 9.1873 15.7056 8.3813 15.2956 7.7793C14.8716 7.1913 14.0516 7.0683 13.4636 7.4783L9.6766 10.1993L6.5596 7.9573C5.9026 7.4783 5.0966 7.1363 4.1256 7.1363C2.4716 7.1363 1.2266 8.1893 1.1176 9.6523L0.6936 15.7503C0.5576 17.5683 1.4326 18.9083 3.4696 19.2093L9.3206 20.0563L7.7626 25.7983C7.5436 26.5643 7.9806 27.2073 8.6916 27.3983ZM0.5436 27.2483H6.0946C6.3676 27.2483 6.5456 27.0563 6.5456 26.7973C6.5456 26.5233 6.3676 26.3323 6.0946 26.3323C5.1376 26.3323 4.3986 25.9633 4.1396 24.7873L3.5926 22.2163L4.9456 21.9293C5.1916 21.8753 5.3286 21.6833 5.3286 21.4233C5.3286 21.1643 5.1786 20.9863 4.9326 20.9453L0.6116 20.2203C0.0376 20.1253 -0.1124 20.5353 0.0786 20.9453L0.3106 21.4373C0.7076 22.3123 1.3636 22.6813 2.3896 22.4633L2.7176 22.3943L3.1826 24.5273L0.2836 26.4413C-0.0444 26.6603 -0.0034 27.2483 0.5436 27.2483Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.94950648968977 26.963425613315668"
          className={className}
        >
          <path
            d="              M4.1511 5.4823C5.6411 5.4823 6.8851 4.2383 6.8851 2.7342C6.8851 1.2303 5.6411 0.0003 4.1511 0.0003C2.6331 0.0003 1.3891 1.2303 1.3891 2.7342C1.3891 4.2383 2.6331 5.4823 4.1511 5.4823ZM11.6561 26.6873H18.7251C19.1081 26.6873 19.1351 26.2223 18.8751 26.0453L16.0721 24.1853C16.4421 23.7343 16.5921 23.2693 16.7561 22.6813L19.7231 10.9373C19.8051 10.9513 19.8871 10.9513 19.9691 10.9513C21.6101 10.9513 22.9491 9.6113 22.9491 7.9573C22.9491 6.3163 21.6101 4.9763 19.9691 4.9763C18.3151 4.9763 16.9751 6.3163 16.9751 7.9573C16.9751 9.2833 17.8361 10.4043 19.0261 10.8013L16.0861 22.5453C15.5801 24.5683 13.7891 25.9633 11.6561 25.9633C11.4511 25.9633 11.3151 26.1133 11.3151 26.3183C11.3151 26.5233 11.4511 26.6873 11.6561 26.6873ZM19.9691 10.2673C18.6021 10.2673 17.6581 9.3242 17.6581 7.9573C17.6581 6.6032 18.6021 5.6603 19.9691 5.6603C21.3221 5.6603 22.2661 6.6032 22.2661 7.9573C22.2661 9.3242 21.3221 10.2673 19.9691 10.2673ZM8.4711 26.9203C9.0721 27.0843 9.8111 26.7833 10.0161 26.0313L11.9161 19.1273C12.1621 18.2523 11.7931 17.6363 10.9041 17.3903L5.3811 15.8183L5.8191 10.9782C5.8321 10.8143 6.0101 10.7323 6.1331 10.8143L8.6761 12.6603C9.1411 13.0023 9.7151 13.0023 10.1801 12.6603L14.6371 9.4743C15.2111 9.0643 15.3481 8.2713 14.9511 7.6832C14.5281 7.1093 13.7211 6.9862 13.1471 7.3833L9.4421 10.0493L6.3791 7.8613C5.7371 7.3833 4.9441 7.0543 3.9871 7.0543C2.3731 7.0543 1.1431 8.0803 1.0471 9.5293L0.6231 15.5043C0.5001 17.2813 1.3621 18.5933 3.3441 18.8813L9.1001 19.7153L7.5551 25.3473C7.3501 26.0993 7.7741 26.7283 8.4711 26.9203ZM0.4871 26.6873H5.9281C6.1471 26.6873 6.2831 26.5513 6.2831 26.3183C6.2831 26.0993 6.1471 25.9633 5.9281 25.9633C4.9441 25.9633 4.1921 25.5803 3.9321 24.3773L3.3711 21.8063L4.7931 21.5063C5.0121 21.4653 5.1211 21.3013 5.1211 21.0683C5.1211 20.8223 4.9981 20.6853 4.7661 20.6443L0.5411 19.9333C0.0221 19.8513 -0.1009 20.1933 0.0761 20.5763L0.2951 21.0543C0.6781 21.9023 1.2931 22.2443 2.2781 22.0393L2.6881 21.9433L3.1661 24.1443L0.2811 26.0453C0.0221 26.2223 0.0221 26.6873 0.4871 26.6873Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
