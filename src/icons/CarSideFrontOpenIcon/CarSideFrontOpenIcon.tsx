import { IconProps } from "../../types"

export default function CarSideFrontOpenIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52.5546875 25.853515625"
          className={className}
        >
          <path
            d="              M4.9767 22.7224H7.3557C8.3537 24.5824 10.3227 25.8534 12.5917 25.8534C14.8477 25.8534 16.8167 24.5824 17.8147 22.7224H35.1227C36.1207 24.5824 38.0897 25.8534 40.3597 25.8534C42.6017 25.8534 44.5707 24.5824 45.5687 22.7224H48.0837C50.8187 22.7224 52.5547 20.9044 52.5547 18.1694V12.5504C52.5547 10.3084 51.8987 7.9294 48.4257 6.8224L45.8827 6.0024C43.9007 3.7184 40.4137 0.6014 34.3707 0.6014H31.0627C25.0607 0.6014 22.4907 1.2304 18.8397 3.5134L14.6017 6.1794L9.8987 1.4904C8.8457 0.4514 8.0667 0.0004 5.9887 0.0004H2.0097C0.8207 0.0004 -0.0003 0.8344 -0.0003 1.9554C-0.0003 3.0894 0.8067 3.9234 2.0097 3.9234H5.8517C6.5897 3.9234 6.9177 4.1284 7.3417 4.5524L10.1037 7.3284L7.2187 7.6834C2.7067 8.2444 0.1637 10.9374 0.1637 14.9844V17.8144C0.1637 21.0134 2.0507 22.7224 4.9767 22.7224ZM40.3597 14.0134C37.7757 14.0134 35.5747 15.6684 34.7677 17.9924H18.1697C17.3637 15.6684 15.1617 14.0134 12.5917 14.0134C10.0077 14.0134 7.8067 15.6684 6.9997 17.9924H5.8657C5.2637 17.9924 4.8807 17.6094 4.8807 16.9804V14.6694C4.8807 13.3304 5.6467 12.6464 7.3277 12.4414L15.0117 11.4984L21.3557 7.5334C24.2817 5.7144 25.8267 5.3454 31.0627 5.3454H34.3707C38.0077 5.3454 40.6597 6.7404 43.2027 10.4724L47.0447 11.4574C47.5507 11.5934 47.8247 12.0174 47.8247 12.5504V16.9804C47.8247 17.6644 47.5097 17.9924 46.8397 17.9924H45.9237C45.1177 15.6684 42.9157 14.0134 40.3597 14.0134ZM12.5917 21.6564C11.6757 21.6564 10.9517 20.9314 10.9517 20.0154C10.9517 19.0994 11.6757 18.3754 12.5917 18.3754C13.4937 18.3754 14.2327 19.0994 14.2327 20.0154C14.2327 20.9314 13.4937 21.6564 12.5917 21.6564ZM40.3597 21.6564C39.4297 21.6564 38.7047 20.9314 38.7047 20.0154C38.7047 19.0994 39.4297 18.3754 40.3597 18.3754C41.2617 18.3754 41.9997 19.0994 41.9997 20.0154C41.9997 20.9314 41.2617 21.6564 40.3597 21.6564Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50.53125 24.021484375"
          className={className}
        >
          <path
            d="              M4.2657 20.8904H6.8907C7.7107 22.7364 9.5567 24.0214 11.7307 24.0214C13.9047 24.0214 15.7497 22.7364 16.5707 20.8904H34.5767C35.3967 22.7364 37.2557 24.0214 39.4157 24.0214C41.5897 24.0214 43.4357 22.7364 44.2557 20.8904H46.7027C49.0547 20.8904 50.5317 19.3594 50.5317 16.9804V11.4164C50.5317 9.3384 49.9027 7.3414 46.8947 6.3844L44.2287 5.5504C42.3417 3.3494 39.0467 0.2874 33.1957 0.2874H29.9417C24.1177 0.2874 21.7107 0.8614 18.2107 3.0624L13.6717 5.9204L9.0507 1.2984C8.1207 0.3824 7.2187 0.0004 5.5647 0.0004H1.5177C0.6017 0.0004 -0.0003 0.6014 -0.0003 1.4634C-0.0003 2.3244 0.6017 2.9394 1.5177 2.9394H5.6057C6.2347 2.9394 6.5897 3.1034 6.9727 3.4724L10.2817 6.7954L6.6037 7.2464C2.4747 7.7524 0.0817 10.1994 0.0817 13.8364V16.6114C0.0817 19.3734 1.6817 20.8904 4.2657 20.8904ZM39.4157 13.4254C36.9277 13.4254 34.8497 15.1074 34.2757 17.4184H16.8707C16.2967 15.1074 14.2187 13.4254 11.7307 13.4254C9.2427 13.4254 7.1637 15.1074 6.5897 17.4184H4.7717C3.9927 17.4184 3.5407 16.9254 3.5407 16.0644V13.6854C3.5407 11.9904 4.6487 10.9784 6.8087 10.7184L13.9177 9.8434L20.0567 6.0154C23.0237 4.1564 24.7047 3.7594 29.9417 3.7594H33.1957C36.8727 3.7594 39.7027 5.2224 42.2737 8.8864L45.8687 9.8164C46.7437 10.0354 47.0587 10.6364 47.0587 11.4164V16.1194C47.0587 16.9664 46.6487 17.4184 45.8827 17.4184H44.5567C43.9827 15.1074 41.9047 13.4254 39.4157 13.4254ZM11.7307 20.8224C10.5687 20.8224 9.6657 19.9204 9.6657 18.7574C9.6657 17.6094 10.5687 16.7074 11.7307 16.7074C12.8787 16.7074 13.7947 17.6094 13.7947 18.7574C13.7947 19.9204 12.8787 20.8224 11.7307 20.8224ZM39.4157 20.8224C38.2677 20.8224 37.3657 19.9204 37.3657 18.7574C37.3657 17.6094 38.2677 16.7074 39.4157 16.7074C40.5647 16.7074 41.4807 17.6094 41.4807 18.7574C41.4807 19.9204 40.5647 20.8224 39.4157 20.8224Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 51.59765625 24.9921875"
          className={className}
        >
          <path
            d="              M4.6487 21.8473H7.1367C8.0527 23.7072 9.9667 24.9922 12.1817 24.9922C14.3967 24.9922 16.3107 23.7072 17.2267 21.8473H34.8637C35.7797 23.7072 37.6937 24.9922 39.9087 24.9922C42.1227 24.9922 44.0367 23.7072 44.9527 21.8473H47.4277C49.9847 21.8473 51.5977 20.1793 51.5977 17.6093V12.0173C51.5977 9.8433 50.9547 7.6563 47.7017 6.6173L45.1037 5.7832C43.1617 3.5413 39.7717 0.4513 33.8247 0.4513H30.5297C24.6227 0.4513 22.1207 1.0523 18.5527 3.2952L14.1637 6.0562L9.4887 1.3942C8.5037 0.4243 7.6697 0.0003 5.7837 0.0003H1.7777C0.7247 0.0003 -0.0003 0.7243 -0.0003 1.7222C-0.0003 2.7203 0.7107 3.4593 1.7777 3.4593H5.7287C6.4257 3.4593 6.7677 3.6363 7.1637 4.0472L10.1857 7.0823L6.9317 7.4782C2.5977 8.0113 0.1227 10.5953 0.1227 14.4373V17.2403C0.1227 20.2343 1.8727 21.8473 4.6487 21.8473ZM39.9087 13.7263C37.3787 13.7263 35.2327 15.4083 34.5347 17.7183H17.5547C16.8577 15.4083 14.7107 13.7263 12.1817 13.7263C9.6387 13.7263 7.5057 15.4083 6.7947 17.7183H5.3597C4.6617 17.7183 4.2517 17.2813 4.2517 16.5433V14.2053C4.2517 12.7013 5.1817 11.8673 7.0817 11.6352L14.5057 10.7183L20.7407 6.8223C23.6937 4.9763 25.2927 4.5933 30.5297 4.5933H33.8247C37.4747 4.5933 40.2087 6.0153 42.7657 9.7203L46.4847 10.6913C47.1677 10.8553 47.4687 11.3613 47.4687 12.0173V16.5703C47.4687 17.3363 47.0997 17.7183 46.3887 17.7183H45.2817C44.5837 15.4083 42.4517 13.7263 39.9087 13.7263ZM12.1817 21.2603C11.1567 21.2603 10.3497 20.4533 10.3497 19.4273C10.3497 18.3883 11.1567 17.5823 12.1817 17.5823C13.2067 17.5823 14.0277 18.3883 14.0277 19.4273C14.0277 20.4533 13.2067 21.2603 12.1817 21.2603ZM39.9087 21.2603C38.8827 21.2603 38.0767 20.4533 38.0767 19.4273C38.0767 18.3883 38.8827 17.5823 39.9087 17.5823C40.9337 17.5823 41.7537 18.3883 41.7537 19.4273C41.7537 20.4533 40.9337 21.2603 39.9087 21.2603Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 47.359375 21.4375"
          className={className}
        >
          <path
            d="              M3.3767 18.3608H6.2347C6.8087 20.1658 8.4767 21.4378 10.4867 21.4378C12.4957 21.4378 14.1637 20.1658 14.7387 18.3608H33.4827C34.0567 20.1658 35.7107 21.4378 37.7347 21.4378C39.7437 21.4378 41.4117 20.1658 41.9867 18.3608H44.4197C46.2657 18.3608 47.3597 17.2268 47.3597 15.3258V9.8578C47.3597 8.0118 46.7167 6.5898 44.4887 5.9198L41.6717 5.1128C39.9627 3.0488 36.9687 -0.0002 31.3637 -0.0002H28.1917C22.6547 -0.0002 20.5217 0.5198 17.2407 2.5698L12.3317 5.6468L7.7927 1.0938C7.1097 0.3968 6.2347 0.1098 5.0727 0.1098H0.7927C0.3147 0.1098 -0.0003 0.4238 -0.0003 0.8748C-0.0003 1.3258 0.3147 1.6538 0.7927 1.6538H5.2367C5.8247 1.6538 6.1937 1.7768 6.5347 2.1188L10.5687 6.1518L5.5777 6.7678C2.0507 7.2048 -0.0003 9.2288 -0.0003 12.2768V14.9018C-0.0003 17.1858 1.1487 18.3608 3.3767 18.3608ZM37.7347 12.5098C35.3277 12.5098 33.4277 14.3148 33.2777 16.6658H14.9437C14.7927 14.3148 12.8927 12.5098 10.4867 12.5098C8.0797 12.5098 6.1797 14.3148 6.0297 16.6658H3.4587C2.2557 16.6658 1.6957 16.0368 1.6957 14.7108V12.2768C1.6957 10.1448 3.1587 8.7638 5.7967 8.4488L12.3317 7.6428L18.1427 4.0198C21.1507 2.1328 23.0097 1.6948 28.1917 1.6948H31.3637C35.0817 1.6948 38.1177 3.2268 40.6877 6.7948L43.9957 7.6428C45.2407 7.9568 45.6777 8.7228 45.6777 9.8578V14.9708C45.6777 16.0508 45.1307 16.6658 44.1597 16.6658H42.1917C42.0407 14.3148 40.1407 12.5098 37.7347 12.5098ZM10.4867 19.7418C8.9277 19.7418 7.7107 18.5258 7.7107 16.9668C7.7107 15.4078 8.9277 14.1918 10.4867 14.1918C12.0447 14.1918 13.2617 15.4078 13.2617 16.9668C13.2617 18.5258 12.0447 19.7418 10.4867 19.7418ZM37.7347 19.7418C36.1757 19.7418 34.9587 18.5258 34.9587 16.9668C34.9587 15.4078 36.1757 14.1918 37.7347 14.1918C39.2927 14.1918 40.5097 15.4078 40.5097 16.9668C40.5097 18.5258 39.2927 19.7418 37.7347 19.7418Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49.232421875 22.845703125"
          className={className}
        >
          <path
            d="              M3.8147 19.7281H6.6037C7.3007 21.5741 9.0647 22.8461 11.1837 22.8461C13.2887 22.8461 15.0527 21.5741 15.7637 19.7281H34.2477C34.9457 21.5741 36.7087 22.8461 38.8277 22.8461C40.9337 22.8461 42.6977 21.5741 43.4087 19.7281H45.8147C47.9197 19.7281 49.2327 18.3891 49.2327 16.2281V10.7051C49.2327 8.7361 48.6307 6.9731 45.9237 6.1251L43.1617 5.2641C41.3437 3.1171 38.1717 0.0821 32.4567 0.0821H29.2307C23.5157 0.0821 21.2187 0.6421 17.8147 2.7751L13.0707 5.7561L8.5037 1.1891C7.6697 0.3551 6.6717 0.0001 5.2907 0.0001H1.1897C0.4647 0.0001 -0.0003 0.4651 -0.0003 1.1481C-0.0003 1.8321 0.4647 2.3101 1.1897 2.3101H5.4547C6.0157 2.3101 6.3987 2.4611 6.7407 2.8031L10.4047 6.4671L6.2207 6.9731C2.3107 7.4511 0.0277 9.7341 0.0277 13.1111V15.8461C0.0277 18.3201 1.4357 19.7281 3.8147 19.7281ZM38.8277 13.0431C36.3807 13.0431 34.4117 14.7651 34.0017 17.0761H16.0097C15.5997 14.7651 13.6177 13.0431 11.1837 13.0431C8.7497 13.0431 6.7677 14.7651 6.3577 17.0761H4.0747C3.1857 17.0761 2.6797 16.5021 2.6797 15.4761V13.0571C2.6797 11.1421 4.0197 9.9261 6.4667 9.6251L13.2207 8.7911L19.2227 5.0451C22.2307 3.1721 23.9937 2.7481 29.2307 2.7481H32.4567C36.1487 2.7481 39.1017 4.2521 41.6857 7.8751L45.1177 8.7771C46.2387 9.0641 46.5667 9.7481 46.5667 10.7051V15.5721C46.5667 16.5151 46.0877 17.0761 45.2677 17.0761H43.6407C43.2437 14.7651 41.2617 13.0431 38.8277 13.0431ZM11.1837 20.2891C9.8707 20.2891 8.8597 19.2771 8.8597 17.9651C8.8597 16.6521 9.8707 15.6401 11.1837 15.6401C12.4827 15.6401 13.5077 16.6521 13.5077 17.9651C13.5077 19.2771 12.4827 20.2891 11.1837 20.2891ZM38.8277 20.2891C37.5157 20.2891 36.5037 19.2771 36.5037 17.9651C36.5037 16.6521 37.5157 15.6401 38.8277 15.6401C40.1267 15.6401 41.1527 16.6521 41.1527 17.9651C41.1527 19.2771 40.1267 20.2891 38.8277 20.2891Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48.494140625 22.216796875"
          className={className}
        >
          <path
            d="              M3.5687 19.0993H6.4527C7.0817 20.9313 8.7907 22.2163 10.8687 22.2163C12.9477 22.2163 14.6697 20.9313 15.2987 19.0993H34.0707C34.6997 20.9313 36.4087 22.2163 38.4867 22.2163C40.5647 22.2163 42.2867 20.9313 42.9157 19.0993H45.3227C47.2907 19.0993 48.4937 17.8553 48.4937 15.8453V10.3363C48.4937 8.4223 47.9197 6.7953 45.3767 6.0023L42.5607 5.1403C40.7837 3.0213 37.6797 0.0003 32.0337 0.0003H28.8207C23.1877 0.0003 20.9457 0.5473 17.5817 2.6523L12.7427 5.6873L8.2027 1.1483C7.4097 0.3553 6.3707 0.0273 5.1267 0.0273H1.0117C0.3827 0.0273 -0.0003 0.4103 -0.0003 0.9983C-0.0003 1.5863 0.3827 1.9963 1.0117 1.9963H5.3727C5.8787 1.9963 6.2757 2.1193 6.6037 2.4473L10.4587 6.3023L6.0017 6.8493C2.2287 7.3143 -0.0003 9.4883 -0.0003 12.7423V15.4493C-0.0003 17.7733 1.2987 19.0993 3.5687 19.0993ZM38.4867 12.8653C36.0797 12.8653 34.1657 14.5883 33.8517 16.8983H15.5037C15.2027 14.5883 13.2757 12.8653 10.8687 12.8653C8.4627 12.8653 6.5347 14.5883 6.2347 16.8983H3.6917C2.7207 16.8983 2.2017 16.2973 2.2017 15.1753V12.7423C2.2017 10.6913 3.6507 9.3653 6.2887 9.0373L12.8247 8.2163L18.7577 4.5253C21.7797 2.6523 23.5977 2.2013 28.8207 2.2013H32.0337C35.7517 2.2013 38.7597 3.7463 41.3437 7.3413L44.6937 8.2163C45.9517 8.5313 46.2927 9.2833 46.2927 10.3363V15.2983C46.2927 16.2973 45.7867 16.8983 44.9257 16.8983H43.1207C42.8207 14.5883 40.8927 12.8653 38.4867 12.8653ZM10.8687 20.0153C9.4747 20.0153 8.3947 18.9353 8.3947 17.5413C8.3947 16.1463 9.4747 15.0663 10.8687 15.0663C12.2637 15.0663 13.3437 16.1463 13.3437 17.5413C13.3437 18.9353 12.2637 20.0153 10.8687 20.0153ZM38.4867 20.0153C37.0917 20.0153 36.0117 18.9353 36.0117 17.5413C36.0117 16.1463 37.0917 15.0663 38.4867 15.0663C39.8807 15.0663 40.9607 16.1463 40.9607 17.5413C40.9607 18.9353 39.8807 20.0153 38.4867 20.0153Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49.79296875 23.365234375"
          className={className}
        >
          <path
            d="              M4.0057 20.2342H6.7267C7.4787 22.0802 9.2837 23.3652 11.4157 23.3652C13.5487 23.3652 15.3537 22.0802 16.1057 20.2342H34.3847C35.1367 22.0802 36.9417 23.3652 39.0877 23.3652C41.2207 23.3652 43.0257 22.0802 43.7777 20.2342H46.1977C48.4117 20.2342 49.7927 18.8122 49.7927 16.5562V11.0192C49.7927 8.9962 49.1777 7.1362 46.3477 6.2342L43.6137 5.3862C41.7677 3.2262 38.5547 0.1772 32.7717 0.1772H29.5317C23.7757 0.1772 21.4377 0.7382 17.9927 2.9122L13.3297 5.8242L8.7367 1.2442C7.8617 0.3692 6.9047 0.0002 5.4007 0.0002H1.3267C0.5337 0.0002 -0.0003 0.5332 -0.0003 1.2852C-0.0003 2.0512 0.5197 2.5842 1.3267 2.5842H5.5237C6.1117 2.5842 6.4807 2.7342 6.8357 3.0902L10.3497 6.6172L6.3847 7.0952C2.3787 7.5882 0.0547 9.9392 0.0547 13.4262V16.1872C0.0547 18.7852 1.5447 20.2342 4.0057 20.2342ZM39.0877 13.2072C36.6137 13.2072 34.6037 14.9162 34.1247 17.2262H16.3787C15.9007 14.9162 13.8767 13.2072 11.4157 13.2072C8.9547 13.2072 6.9317 14.9162 6.4527 17.2262H4.3747C3.5277 17.2262 3.0487 16.6932 3.0487 15.7362V13.3302C3.0487 11.5112 4.2927 10.3902 6.6177 10.1032L13.5217 9.2422L19.5917 5.4692C22.5727 3.6092 24.3087 3.1852 29.5317 3.1852H32.7717C36.4627 3.1852 39.3617 4.6762 41.9457 8.3262L45.4457 9.2282C46.4567 9.4882 46.7847 10.1312 46.7847 11.0192V15.8042C46.7847 16.7072 46.3337 17.2262 45.5407 17.2262H44.0367C43.5587 14.9162 41.5347 13.2072 39.0877 13.2072ZM11.4157 20.5212C10.1717 20.5212 9.2017 19.5512 9.2017 18.3062C9.2017 17.0622 10.1717 16.1052 11.4157 16.1052C12.6597 16.1052 13.6307 17.0622 13.6307 18.3062C13.6307 19.5512 12.6597 20.5212 11.4157 20.5212ZM39.0877 20.5212C37.8437 20.5212 36.8727 19.5512 36.8727 18.3062C36.8727 17.0622 37.8437 16.1052 39.0877 16.1052C40.3187 16.1052 41.2887 17.0622 41.2887 18.3062C41.2887 19.5512 40.3187 20.5212 39.0877 20.5212Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.869140625 20.384765625"
          className={className}
        >
          <path
            d="              M3.1177 17.3773H5.9607C6.4527 19.1403 8.0387 20.3843 9.9807 20.3843C11.9087 20.3843 13.5077 19.1403 13.9997 17.3773H32.7167C33.2087 19.1403 34.7947 20.3843 36.7367 20.3843C38.6637 20.3843 40.2637 19.1403 40.7557 17.3773H43.2437C44.9117 17.3773 45.8687 16.3793 45.8687 14.6703V9.2283C45.8687 7.4783 45.1307 6.3163 43.3397 5.8243L40.4827 5.0863C38.8827 3.1033 36.0117 0.0003 30.4747 0.0003H27.3707C21.9707 0.0003 19.9477 0.4923 16.7757 2.4743L11.7987 5.5913L7.2457 1.0253C6.6997 0.4653 6.0707 0.2323 4.9907 0.2323H0.4927C0.2047 0.2323 -0.0003 0.4373 -0.0003 0.7113C-0.0003 0.9843 0.2047 1.1893 0.4927 1.1893H5.0587C5.7427 1.1893 6.0707 1.3263 6.4397 1.6953L10.7047 5.9613L5.0177 6.6723C1.8187 7.0543 -0.0003 8.8733 -0.0003 11.6623V14.1643C-0.0003 16.4203 0.9297 17.3773 3.1177 17.3773ZM40.9197 16.2153C40.9197 13.8633 39.0747 12.0313 36.7367 12.0313C34.3847 12.0313 32.5527 13.8633 32.5527 16.2153C32.5527 16.2563 32.5527 16.3103 32.5527 16.3653H14.1507C14.1637 16.3103 14.1637 16.2563 14.1637 16.2153C14.1637 13.8633 12.3187 12.0313 9.9807 12.0313C7.6287 12.0313 5.7967 13.8633 5.7967 16.2153C5.7967 16.2563 5.7967 16.3103 5.7967 16.3653H3.1447C1.6407 16.3653 1.0117 15.7093 1.0117 14.1093V11.6623C1.0117 9.4203 2.4887 7.9843 5.1407 7.6703L11.6757 6.8773L17.3087 3.3493C20.3297 1.4763 22.2167 1.0253 27.3707 1.0253H30.4747C34.1797 1.0253 37.2557 2.5563 39.8267 6.0703L43.0667 6.8903C44.2967 7.1913 44.8577 7.9843 44.8577 9.2283V14.5473C44.8577 15.7223 44.2557 16.3653 43.1617 16.3653H40.9067C40.9197 16.3103 40.9197 16.2563 40.9197 16.2153ZM9.9807 19.3733C8.2027 19.3733 6.8087 17.9923 6.8087 16.2153C6.8087 14.4243 8.2027 13.0433 9.9807 13.0433C11.7577 13.0433 13.1387 14.4243 13.1387 16.2153C13.1387 17.9923 11.7577 19.3733 9.9807 19.3733ZM36.7367 19.3733C34.9587 19.3733 33.5647 17.9923 33.5647 16.2153C33.5647 14.4243 34.9587 13.0433 36.7367 13.0433C38.5137 13.0433 39.8947 14.4243 39.8947 16.2153C39.8947 17.9923 38.5137 19.3733 36.7367 19.3733Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.103515625 19.8515625"
          className={className}
        >
          <path
            d="              M2.9937 16.8709H5.8107C6.2617 18.6079 7.8207 19.8519 9.7207 19.8519C11.6077 19.8519 13.1657 18.6079 13.6177 16.8709H32.3207C32.7717 18.6079 34.3297 19.8519 36.2167 19.8519C38.1177 19.8519 39.6757 18.6079 40.1267 16.8709H42.6287C44.2147 16.8709 45.1037 15.9549 45.1037 14.3149V8.9139C45.1037 7.2049 44.3107 6.1659 42.7387 5.7699L39.8807 5.0589C38.3357 3.1309 35.5197 -0.0001 30.0097 -0.0001H26.9477C21.6157 -0.0001 19.6597 0.4649 16.5427 2.4199L11.5257 5.5649L6.9727 0.9839C6.4937 0.4919 5.9747 0.2869 4.9497 0.2869H0.3417C0.1507 0.2869 -0.0003 0.4379 -0.0003 0.6149C-0.0003 0.8069 0.1507 0.9569 0.3417 0.9569H4.9627C5.7017 0.9569 6.0157 1.0939 6.3847 1.4629L10.7867 5.8649L4.7167 6.6039C1.6957 6.9729 -0.0003 8.6949 -0.0003 11.3479V13.7949C-0.0003 16.0239 0.8337 16.8709 2.9937 16.8709ZM40.2637 15.8179C40.2637 13.5489 38.4867 11.7719 36.2167 11.7719C33.9607 11.7719 32.1837 13.5489 32.1837 15.8179C32.1837 15.9419 32.1837 16.0649 32.1977 16.2009H13.7407C13.7537 16.0779 13.7537 15.9419 13.7537 15.8179C13.7537 13.5489 11.9767 11.7719 9.7207 11.7719C7.4517 11.7719 5.6737 13.5489 5.6737 15.8179C5.6737 15.9419 5.6877 16.0649 5.7017 16.2009H2.9937C1.3127 16.2009 0.6697 15.5309 0.6697 13.7949V11.3479C0.6697 9.0369 2.1597 7.5739 4.8127 7.2599L11.3337 6.4809L16.8987 3.0079C19.9067 1.1209 21.8207 0.6699 26.9477 0.6699H30.0097C33.7287 0.6699 36.8187 2.2009 39.3887 5.6879L42.5877 6.4939C43.8187 6.7949 44.4337 7.5879 44.4337 8.9139V14.3279C44.4337 15.5449 43.8187 16.2009 42.6427 16.2009H40.2367C40.2497 16.0779 40.2637 15.9419 40.2637 15.8179ZM9.7207 19.1819C7.8207 19.1819 6.3437 17.7049 6.3437 15.8179C6.3437 13.9179 7.8207 12.4419 9.7207 12.4419C11.6077 12.4419 13.0837 13.9179 13.0837 15.8179C13.0837 17.7049 11.6077 19.1819 9.7207 19.1819ZM36.2167 19.1819C34.3297 19.1819 32.8537 17.7049 32.8537 15.8179C32.8537 13.9179 34.3297 12.4419 36.2167 12.4419C38.1177 12.4419 39.5937 13.9179 39.5937 15.8179C39.5937 17.7049 38.1177 19.1819 36.2167 19.1819Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
