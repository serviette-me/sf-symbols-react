import { IconProps } from "../../types"

export default function HandThumbsdownIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.9765625 34.5078125"
          className={className}
        >
          <path
            d="              M32.9764 11.5525C32.9764 5.8105 29.4494 1.3675 24.0894 1.3675H19.6734C17.6774 0.4645 15.4624 -0.0005 13.1794 -0.0005H11.1974C9.1194 -0.0005 7.4374 0.1365 6.3984 0.4105C3.9234 1.0115 2.2694 2.9535 2.2694 5.2085C2.2694 5.4145 2.2964 5.6055 2.3514 5.7965C1.4084 6.6855 0.8884 7.9025 0.8884 9.2145C0.8884 9.7205 0.9704 10.1855 1.1214 10.6095C0.5054 11.4025 0.1774 12.4145 0.1774 13.4945C0.1774 14.1775 0.3144 14.8065 0.5604 15.3675C0.1914 16.0785 0.0004 16.9665 0.0004 17.9235C0.0004 20.6585 1.9824 22.6815 4.7034 22.6815H9.4064C9.5154 22.6815 9.6114 22.7495 9.5564 22.9145C9.1734 24.0215 7.4234 27.0835 7.4234 29.8595C7.4234 32.5255 9.3654 34.5075 11.9624 34.5075C13.8224 34.5075 15.1754 33.5235 16.3104 31.3495C18.1564 27.7405 20.6034 24.6775 22.8324 21.8205H24.6364C29.7094 21.8205 32.9764 17.3765 32.9764 11.5525ZM22.1344 11.8265C22.1344 14.4925 21.5464 16.2015 19.7144 18.6755C17.6094 21.5055 14.6564 24.9785 12.5374 29.2305C12.4274 29.4355 12.3184 29.5175 12.1404 29.5175C11.9214 29.5175 11.8124 29.3395 11.8124 29.1215C11.8124 27.8765 14.0684 24.3635 14.0684 21.8475C14.0684 19.7835 12.5504 18.2925 10.0764 18.2925H5.0174C4.6484 18.2925 4.3884 18.0465 4.3884 17.7185C4.3884 17.4995 4.4704 17.3225 4.6624 17.1035C5.4824 16.2425 5.6054 14.7515 4.8394 14.0135C4.6754 13.8085 4.5934 13.6445 4.5934 13.4665C4.5934 13.2755 4.7164 13.0835 4.9494 12.9335C5.9204 12.2775 6.1794 10.9515 5.6734 9.8715C5.5644 9.6525 5.5094 9.4745 5.5094 9.3105C5.5094 8.9825 5.7144 8.7085 6.0564 8.5035C7.0274 7.9435 7.3284 6.6035 6.9454 5.6325C6.8634 5.4685 6.8364 5.3865 6.8634 5.2775C6.8634 5.0175 7.0544 4.7855 7.6294 4.6485C8.3944 4.4705 9.7074 4.3745 11.9494 4.3885L13.1254 4.4025C18.5114 4.4565 22.1344 7.3825 22.1344 11.8265ZM28.7794 11.5525C28.7794 14.7245 27.5074 17.0895 25.7164 17.5405C25.6214 17.5545 25.5114 17.5685 25.4164 17.5815C26.1814 15.7905 26.5374 13.9175 26.5374 11.6625C26.5374 9.3515 25.8674 7.1775 24.5414 5.2775C24.5954 5.2775 24.7324 5.2905 24.8414 5.3045C27.1254 5.7695 28.7794 8.2165 28.7794 11.5525Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.40625 32.115234375"
          className={className}
        >
          <path
            d="              M30.4067 10.5688C30.4067 5.4828 27.2067 1.4078 22.7777 1.4078H18.3887C16.5157 0.5058 14.3557 -0.0002 12.0447 -0.0002H10.1307C8.2717 -0.0002 6.7267 0.1098 5.7287 0.3688C3.5817 0.8888 2.1877 2.5018 2.1877 4.4298C2.1877 4.7028 2.2147 4.9488 2.2967 5.1948C1.3667 5.9878 0.8477 7.0958 0.8477 8.2988C0.8477 8.8188 0.9437 9.3108 1.1207 9.7478C0.5057 10.4588 0.1637 11.4158 0.1637 12.4278C0.1637 13.0838 0.3147 13.7268 0.5607 14.2458C0.2047 14.8748 -0.0003 15.6818 -0.0003 16.5568C-0.0003 18.9218 1.7497 20.6988 4.1017 20.6988H8.9417C9.1467 20.6988 9.2967 20.8088 9.2697 21.0278C9.0777 22.2848 7.0817 25.4848 7.0817 28.2188C7.0817 30.4608 8.6957 32.1148 10.8687 32.1148C12.4547 32.1148 13.5627 31.2808 14.5607 29.3808C16.2827 26.0308 18.4707 23.1328 21.1367 19.7968H23.2967C27.4667 19.7968 30.4067 15.7368 30.4067 10.5688ZM21.1367 10.7328C21.1367 13.5078 20.5217 15.2578 18.7167 17.6918C16.6657 20.4398 13.8227 23.7618 11.7717 27.8498C11.4707 28.4508 11.2517 28.6148 10.9237 28.6148C10.5407 28.6148 10.2947 28.3148 10.2947 27.8498C10.2947 26.1408 12.5367 22.7778 12.5367 20.4808C12.5367 18.7028 11.1567 17.4998 9.1327 17.4998H4.2657C3.6507 17.4998 3.1987 17.0488 3.1987 16.4608C3.1987 16.0368 3.3357 15.7498 3.6917 15.3808C4.2247 14.8338 4.2927 13.9588 3.8147 13.4528C3.5137 13.0428 3.3907 12.7698 3.3907 12.4138C3.3907 12.0178 3.5957 11.6618 4.0057 11.3478C4.6617 10.8968 4.8537 10.0628 4.5117 9.3238C4.2797 8.9008 4.1837 8.6678 4.1837 8.3398C4.1837 7.8338 4.5117 7.4238 5.1547 7.0818C5.7827 6.7128 5.9747 5.9198 5.7147 5.2908C5.5097 4.7988 5.4827 4.6898 5.4957 4.4708C5.4957 4.0198 5.8237 3.6638 6.5897 3.4728C7.3557 3.2808 8.6407 3.1858 10.4997 3.1988H11.9357C17.4457 3.2268 21.1367 6.2888 21.1367 10.7328ZM27.3027 10.5688C27.3027 13.8498 25.7437 16.4198 23.8297 16.6528C23.5977 16.6528 23.3377 16.6658 23.0917 16.6658C23.9667 14.8478 24.3497 12.9608 24.3497 10.6778C24.3497 8.2988 23.5707 6.1388 22.1207 4.3748C22.4487 4.3748 22.8047 4.3888 23.1467 4.4028C25.4567 4.6348 27.3027 7.2328 27.3027 10.5688Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.7734375 33.38671875"
          className={className}
        >
          <path
            d="              M31.7734 11.088C31.7734 5.66 28.3964 1.381 23.4744 1.381H19.0724C17.1304 0.478 14.9434 0 12.6464 0H10.7054C8.7224 0 7.1094 0.123 6.0974 0.396C3.7734 0.957 2.2424 2.734 2.2424 4.84C2.2424 5.072 2.2694 5.291 2.3244 5.51C1.3944 6.357 0.8754 7.52 0.8754 8.777C0.8754 9.283 0.9704 9.775 1.1214 10.199C0.5054 10.951 0.1774 11.936 0.1774 12.988C0.1774 13.658 0.3144 14.301 0.5744 14.834C0.2054 15.518 0.0004 16.365 0.0004 17.281C0.0004 19.838 1.8734 21.738 4.4294 21.738H9.2014C9.3514 21.738 9.4744 21.834 9.4204 22.025C9.1324 23.201 7.2734 26.332 7.2734 29.08C7.2734 31.555 9.0504 33.387 11.4574 33.387C13.1794 33.387 14.4234 32.471 15.4904 30.42C17.2814 26.934 19.6054 23.939 22.0394 20.863H24.0074C28.6564 20.863 31.7734 16.611 31.7734 11.088ZM21.6704 11.307C21.6704 14.027 21.0684 15.764 19.2504 18.211C17.1714 21 14.2734 24.404 12.1814 28.574C11.9764 28.971 11.8264 29.094 11.5664 29.094C11.2794 29.094 11.1014 28.861 11.1014 28.52C11.1014 27.057 13.3574 23.611 13.3574 21.205C13.3574 19.264 11.8944 17.91 9.6384 17.91H4.6624C4.1834 17.91 3.8284 17.582 3.8284 17.117C3.8284 16.816 3.9374 16.584 4.2114 16.283C4.8944 15.572 4.9904 14.369 4.3614 13.754C4.1424 13.439 4.0334 13.234 4.0334 12.975C4.0334 12.674 4.1974 12.414 4.5114 12.182C5.3324 11.621 5.5644 10.527 5.1274 9.611C4.9624 9.297 4.8944 9.092 4.8944 8.846C4.8944 8.436 5.1544 8.107 5.6324 7.834C6.4394 7.369 6.6994 6.275 6.3714 5.469C6.2344 5.154 6.2074 5.059 6.2204 4.895C6.2204 4.553 6.4804 4.252 7.1364 4.088C7.9164 3.91 9.2014 3.814 11.2654 3.828L12.5784 3.842C18.0194 3.883 21.6704 6.863 21.6704 11.307ZM28.0824 11.088C28.0824 14.314 26.6874 16.775 24.8414 17.117C24.6774 17.131 24.5004 17.145 24.3364 17.158C25.1424 15.34 25.5114 13.467 25.5114 11.197C25.5114 8.859 24.7874 6.686 23.4064 4.853C23.5844 4.853 23.8304 4.867 24.0484 4.881C26.3454 5.236 28.0824 7.752 28.0824 11.088Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.263671875 28.150390625"
          className={className}
        >
          <path
            d="              M26.2637 9.037C26.2637 4.812 23.5017 1.353 20.2207 1.353H16.0647C14.4377 0.506 12.4687 0 10.2677 0H8.5177C6.9317 0 5.5917 0.096 4.7027 0.328C3.0627 0.738 2.0237 1.846 2.0237 3.295C2.0237 3.664 2.0917 3.978 2.2147 4.293C1.3127 4.895 0.8067 5.824 0.8067 6.877C0.8067 7.424 0.9297 7.971 1.1487 8.381C0.5327 8.914 0.1637 9.789 0.1637 10.719C0.1637 11.348 0.3417 12.004 0.6287 12.428C0.2327 12.906 -0.0003 13.631 -0.0003 14.396C-0.0003 16.174 1.3807 17.568 3.1447 17.568H7.8617C8.3667 17.568 8.6677 17.801 8.6677 18.184C8.6677 19.633 6.5077 22.846 6.5077 25.361C6.5077 26.988 7.6287 28.15 9.2007 28.15C10.3497 28.15 11.1157 27.549 11.8947 26.059C13.4667 23.01 15.0797 20.795 18.2797 16.789H20.7127C23.7617 16.789 26.2637 13.357 26.2637 9.037ZM19.3047 9.064C19.3047 11.84 18.6757 13.617 16.9397 15.941C15.0257 18.512 12.3867 21.547 10.4727 25.334C9.9807 26.332 9.6527 26.578 9.1467 26.578C8.5037 26.578 8.0797 26.127 8.0797 25.361C8.0797 23.27 10.2407 20.139 10.2407 18.184C10.2407 16.83 9.1327 15.996 7.6697 15.996H3.1447C2.2557 15.996 1.5727 15.312 1.5727 14.396C1.5727 13.795 1.7637 13.385 2.2007 12.961C2.4887 12.715 2.5157 12.4 2.2697 12.127C1.9137 11.648 1.7367 11.238 1.7367 10.719C1.7367 10.09 2.0367 9.557 2.5707 9.16C2.9117 8.928 3.0487 8.586 2.8297 8.176C2.5297 7.67 2.3787 7.355 2.3787 6.877C2.3787 6.18 2.8167 5.619 3.6917 5.182C3.9917 5.018 4.0877 4.758 3.9237 4.443C3.6507 3.801 3.6097 3.623 3.6097 3.295C3.6097 2.611 4.1017 2.092 5.0727 1.846C5.8237 1.654 7.0277 1.559 8.5037 1.572H10.1717C15.6267 1.6 19.3047 4.703 19.3047 9.064ZM24.6917 9.037C24.6917 12.496 22.8047 15.217 20.7127 15.217H19.3187C20.4117 13.316 20.8767 11.457 20.8767 9.092C20.8767 6.617 19.9067 4.484 18.1837 2.926H20.2207C22.5997 2.926 24.6917 5.674 24.6917 9.037Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.765625 30.583984375"
          className={className}
        >
          <path
            d="              M28.7657 9.9392C28.7657 5.2772 25.7717 1.4352 21.9437 1.4352H17.5687C15.7907 0.5192 13.6577 0.0002 11.3207 0.0002H9.4747C7.7387 0.0002 6.2887 0.0952 5.3187 0.3422C3.3637 0.8202 2.1327 2.2152 2.1327 3.9372C2.1327 4.2522 2.1737 4.5392 2.2557 4.8262C1.3537 5.5372 0.8337 6.5762 0.8337 7.7112C0.8337 8.2442 0.9437 8.7632 1.1207 9.1872C0.5197 9.8442 0.1637 10.7732 0.1637 11.7582C0.1637 12.3862 0.3147 13.0432 0.5737 13.5352C0.2187 14.0952 -0.0003 14.8752 -0.0003 15.6952C-0.0003 17.8012 1.6137 19.4412 3.7327 19.4412H8.6547C8.9277 19.4412 9.1057 19.5642 9.0917 19.8102C9.0237 21.1772 6.8767 24.4722 6.8767 27.1662C6.8767 29.1482 8.2717 30.5842 10.1857 30.5842C11.5797 30.5842 12.5507 29.8592 13.4527 28.1232C15.1077 24.9512 17.1167 22.1352 20.0707 18.5112H22.4487C26.0317 18.5112 28.7657 14.6972 28.7657 9.9392ZM20.5077 10.0492C20.5077 12.8652 19.8787 14.6702 18.0877 17.0762C16.0777 19.7562 13.2887 22.9822 11.2927 26.9742C10.8557 27.8362 10.5817 28.0272 10.1577 28.0272C9.6527 28.0272 9.3237 27.6722 9.3237 27.0292C9.3237 25.0472 11.5667 21.7652 11.5667 19.6192C11.5667 18.0192 10.2817 16.9942 8.5447 16.9942H3.7867C3.0217 16.9942 2.4477 16.4202 2.4477 15.6542C2.4477 15.0942 2.6247 14.7382 3.0757 14.2732C3.4317 13.9452 3.4727 13.4532 3.1717 13.1112C2.7887 12.5512 2.6247 12.2092 2.6247 11.7582C2.6247 11.2112 2.8847 10.7462 3.4177 10.3362C3.8687 10.0212 4.0197 9.5022 3.7737 8.9692C3.4727 8.4222 3.3357 8.1482 3.3357 7.7382C3.3357 7.0952 3.7457 6.6172 4.5797 6.1662C5.0037 5.9332 5.1137 5.4822 4.9357 5.0722C4.6617 4.3752 4.6207 4.2522 4.6207 3.9512C4.6207 3.3902 5.0447 2.9392 5.9337 2.7202C6.6987 2.5152 7.9567 2.4332 9.5977 2.4332H11.1837C16.7757 2.4612 20.5077 5.6052 20.5077 10.0492ZM26.3597 9.9392C26.3597 13.3022 24.6227 15.9962 22.6407 16.0782C22.2987 16.0782 21.9567 16.0922 21.6157 16.0922C22.5447 14.2602 22.9547 12.3452 22.9547 10.0622C22.9547 7.6292 22.1207 5.4962 20.5897 3.8142C21.0817 3.8142 21.5737 3.8142 22.0797 3.8142C24.3907 3.8962 26.3597 6.6172 26.3597 9.9392Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.849609375 29.736328125"
          className={className}
        >
          <path
            d="              M27.8497 9.5978C27.8497 5.1678 24.9647 1.4628 21.4787 1.4628H17.1167C15.3807 0.5468 13.2757 -0.0002 10.9237 -0.0002H9.0917C7.4507 -0.0002 6.0297 0.0958 5.0857 0.3418C3.2537 0.7798 2.1057 2.0648 2.1057 3.6778C2.1057 4.0058 2.1597 4.3208 2.2417 4.6078C1.3397 5.3048 0.8337 6.2888 0.8337 7.3968C0.8337 7.9298 0.9297 8.4488 1.1347 8.8868C0.5197 9.5158 0.1637 10.4318 0.1637 11.3888C0.1637 12.0038 0.3277 12.6598 0.5877 13.1388C0.2187 13.6718 -0.0003 14.4238 -0.0003 15.2028C-0.0003 17.1858 1.5447 18.7438 3.5137 18.7438H8.5037C8.8047 18.7438 8.9957 18.8808 8.9957 19.1408C8.9957 20.5628 6.7537 23.8988 6.7537 26.5778C6.7537 28.4238 8.0387 29.7368 9.8027 29.7368C11.1017 29.7368 11.9767 29.0668 12.8237 27.4258C14.4377 24.3358 16.3517 21.5878 19.4687 17.7868H21.9707C25.2247 17.7868 27.8497 14.1098 27.8497 9.5978ZM20.1527 9.6658C20.1527 12.5238 19.5097 14.3418 17.7327 16.7348C15.7497 19.3728 12.9887 22.5588 11.0197 26.4958C10.5137 27.4808 10.1987 27.7128 9.7207 27.7128C9.1597 27.7128 8.7777 27.3168 8.7777 26.5778C8.7777 24.4318 11.0197 21.2048 11.0197 19.1408C11.0197 17.6368 9.7887 16.7208 8.2167 16.7208H3.5137C2.6657 16.7208 2.0237 16.0778 2.0237 15.2028C2.0237 14.5738 2.2147 14.1778 2.7347 13.6718C2.9807 13.4528 3.0077 13.1658 2.8027 12.9198C2.3787 12.2908 2.1877 11.9078 2.1877 11.3888C2.1877 10.7598 2.4887 10.2398 3.0897 9.7758C3.4177 9.5298 3.5547 9.1878 3.3497 8.7778C3.0217 8.1618 2.8577 7.8748 2.8577 7.3968C2.8577 6.6988 3.3087 6.1528 4.2657 5.6598C4.5667 5.4958 4.6347 5.2498 4.4977 4.9488C4.1837 4.1428 4.1427 4.0198 4.1427 3.6778C4.1427 3.0488 4.5937 2.5428 5.5507 2.2968C6.3297 2.0918 7.5737 2.0098 9.0777 2.0098H10.7737C16.4067 2.0238 20.1527 5.2228 20.1527 9.6658ZM25.8257 9.5978C25.8257 12.9888 23.9937 15.7638 21.9707 15.7638H20.7817C21.7517 13.9178 22.1757 12.0038 22.1757 9.7068C22.1757 7.2598 21.3007 5.1268 19.7287 3.4998H21.4787C23.7887 3.4998 25.8257 6.2758 25.8257 9.5978Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.4765625 31.240234375"
          className={className}
        >
          <path
            d="              M29.4767 10.2127C29.4767 5.3727 26.3867 1.4217 22.2987 1.4217H17.9237C16.1057 0.5057 13.9587 -0.0003 11.6347 -0.0003H9.7617C7.9707 -0.0003 6.4807 0.1097 5.4957 0.3557C3.4587 0.8477 2.1597 2.3377 2.1597 4.1567C2.1597 4.4437 2.1877 4.7167 2.2697 4.9767C1.3537 5.7287 0.8477 6.7947 0.8477 7.9567C0.8477 8.4907 0.9437 8.9957 1.1207 9.4337C0.5057 10.1037 0.1637 11.0467 0.1637 12.0447C0.1637 12.6877 0.3147 13.3297 0.5737 13.8357C0.2047 14.4237 -0.0003 15.2167 -0.0003 16.0647C-0.0003 18.2797 1.6817 19.9887 3.8827 19.9887H8.7777C9.0237 19.9887 9.1877 20.0977 9.1737 20.3297C9.0507 21.6567 6.9727 24.8967 6.9727 27.6177C6.9727 29.7087 8.4487 31.2407 10.4867 31.2407C11.9627 31.2407 12.9887 30.4747 13.9317 28.6567C15.6137 25.4157 17.6917 22.5587 20.5347 19.0587H22.8187C26.6467 19.0587 29.4767 15.1487 29.4767 10.2127ZM20.7817 10.3497C20.7817 13.1387 20.1527 14.9157 18.3617 17.3357C16.3377 20.0427 13.5217 23.3107 11.4977 27.3577C11.1287 28.0957 10.8687 28.2737 10.4867 28.2737C10.0347 28.2737 9.7477 27.9457 9.7477 27.3847C9.7477 25.5257 11.9907 22.2027 11.9907 19.9887C11.9907 18.3067 10.6637 17.2127 8.8047 17.2127H3.9917C3.2947 17.2127 2.7757 16.6937 2.7757 15.9957C2.7757 15.5037 2.9257 15.1757 3.3497 14.7517C3.7737 14.3277 3.8277 13.6587 3.4457 13.2477C3.1037 12.7557 2.9527 12.4417 2.9527 12.0317C2.9527 11.5527 3.1987 11.1427 3.6777 10.7737C4.2107 10.3907 4.3747 9.7347 4.0877 9.1187C3.8277 8.6267 3.6917 8.3677 3.6917 7.9977C3.6917 7.4097 4.0737 6.9587 4.8257 6.5627C5.3457 6.2617 5.4827 5.6597 5.2777 5.1547C5.0317 4.5527 4.9907 4.4437 5.0037 4.1697C5.0037 3.6637 5.3727 3.2537 6.2067 3.0347C6.9867 2.8437 8.2577 2.7477 9.9807 2.7617H11.5117C17.0627 2.7887 20.7817 5.8927 20.7817 10.3497ZM26.7557 10.2127C26.7557 13.5347 25.1157 16.1737 23.1597 16.3247C22.8597 16.3247 22.5587 16.3247 22.2437 16.3377C23.1597 14.5057 23.5567 12.6057 23.5567 10.3227C23.5567 7.9157 22.7497 5.7697 21.2457 4.0607C21.6697 4.0607 22.1077 4.0607 22.5447 4.0607C24.8417 4.2107 26.7557 6.8907 26.7557 10.2127Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.158203125 26.05859375"
          className={className}
        >
          <path
            d="              M24.1577 8.2988C24.1577 4.3338 21.5737 1.1898 18.5797 1.1898H14.6697C13.1937 0.4508 11.4027 -0.0002 9.4067 -0.0002H7.7517C6.2347 -0.0002 5.0177 0.0818 4.1977 0.3008C2.8027 0.6698 1.9277 1.5718 1.9277 2.7888C1.9277 3.1858 2.0237 3.5278 2.1877 3.8688C1.2847 4.3748 0.7657 5.2088 0.7657 6.1798C0.7657 6.7678 0.9157 7.3278 1.1757 7.7108C0.5467 8.1078 0.1637 8.9548 0.1637 9.8438C0.1637 10.4868 0.3557 11.1288 0.6697 11.4978C0.2597 11.8948 -0.0003 12.5778 -0.0003 13.3298C-0.0003 14.8208 1.1617 16.0098 2.6387 16.0098H7.0137C7.7797 16.0098 8.2307 16.3648 8.2307 16.9258C8.2307 18.4158 6.1797 21.4378 6.1797 23.7478C6.1797 25.1018 7.1097 26.0588 8.4077 26.0588C9.3657 26.0588 9.9937 25.5388 10.6507 24.2538C12.2087 21.2328 13.3987 19.7418 16.7067 15.4628H19.0447C21.8207 15.4628 24.1577 12.3458 24.1577 8.2988ZM18.1697 8.2718C18.1697 10.9508 17.5687 12.6738 15.8867 14.9028C14.0687 17.3498 11.5797 20.2208 9.7617 23.8168C9.2697 24.7868 8.9417 25.0738 8.3807 25.0738C7.6287 25.0738 7.1507 24.5688 7.1507 23.7478C7.1507 21.7108 9.2147 18.7308 9.2147 16.9258C9.2147 15.7778 8.2717 15.0258 6.9457 15.0258H2.6387C1.7087 15.0258 0.9847 14.2868 0.9847 13.3298C0.9847 12.7418 1.1487 12.3188 1.4907 12.0178C1.8317 11.7438 1.8727 11.3618 1.5587 11.0738C1.2987 10.8008 1.1347 10.3628 1.1347 9.8438C1.1347 9.2008 1.4357 8.6408 1.8867 8.3538C2.2417 8.1348 2.3787 7.7928 2.1327 7.3828C1.8867 7.0278 1.7497 6.6578 1.7497 6.1798C1.7497 5.4828 2.1597 4.8948 2.9397 4.5528C3.2537 4.3888 3.3767 4.1148 3.1717 3.7458C2.9667 3.3628 2.9117 3.1038 2.9117 2.7888C2.9117 2.0508 3.4317 1.4768 4.4297 1.2308C5.1547 1.0528 6.3027 0.9708 7.7517 0.9848H9.3787C14.6017 1.0258 18.1697 4.0058 18.1697 8.2718ZM23.1877 8.2988C23.1877 11.8258 21.2187 14.4788 19.0447 14.4788H17.3767C18.6487 12.5098 19.1547 10.7188 19.1547 8.2718C19.1547 5.7698 18.0607 3.6228 16.1597 2.1738H18.5797C21.0137 2.1738 23.1877 4.8668 23.1877 8.2988Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.091796875 24.96484375"
          className={className}
        >
          <path
            d="              M23.0917 7.9018C23.0917 4.0738 20.5757 1.1078 17.7327 1.1078H13.9587C12.5647 0.4098 10.8687 -0.0002 8.9687 -0.0002H7.3687C5.8927 -0.0002 4.7167 0.0688 3.9377 0.2738C2.6797 0.6148 1.8867 1.4078 1.8867 2.5158C1.8867 2.9398 1.9827 3.2948 2.1597 3.6368C1.2717 4.0878 0.7517 4.8948 0.7517 5.8108C0.7517 6.4258 0.9027 6.9858 1.1897 7.3418C0.5607 7.6968 0.1507 8.5178 0.1507 9.3788C0.1507 10.0218 0.3687 10.6778 0.6977 11.0058C0.2597 11.3608 -0.0003 12.0308 -0.0003 12.7828C-0.0003 14.1228 1.0527 15.2028 2.3927 15.2028H6.5757C7.4787 15.2028 8.0117 15.6268 8.0117 16.2828C8.0117 17.7738 6.0017 20.6988 6.0017 22.9138C6.0017 24.1168 6.8357 24.9648 7.9977 24.9648C8.8597 24.9648 9.4067 24.4998 10.0217 23.3238C11.5527 20.3168 12.5507 19.1948 15.9007 14.7788H18.1837C20.8227 14.7788 23.0917 11.8258 23.0917 7.9018ZM17.5957 7.8478C17.5957 10.4858 17.0077 12.1678 15.3537 14.3688C13.5757 16.7478 11.1697 19.5368 9.3927 23.0238C8.9007 23.9938 8.5727 24.2948 7.9977 24.2948C7.1917 24.2948 6.6857 23.7478 6.6857 22.9138C6.6857 20.9038 8.6817 17.9918 8.6817 16.2828C8.6817 15.2168 7.8337 14.5198 6.5897 14.5198H2.3927C1.4217 14.5198 0.6697 13.7538 0.6697 12.7828C0.6697 12.1948 0.8337 11.7718 1.1207 11.5258C1.4907 11.2248 1.5447 10.8278 1.1897 10.5268C0.9847 10.3628 0.8337 9.9118 0.8337 9.3788C0.8337 8.7358 1.1207 8.1618 1.5447 7.9158C1.8867 7.7108 2.0367 7.3828 1.7637 6.9588C1.5587 6.6858 1.4217 6.3028 1.4217 5.8108C1.4217 5.1128 1.8187 4.5258 2.5567 4.2108C2.8707 4.0468 3.0077 3.7738 2.7757 3.3908C2.6117 3.1168 2.5567 2.8298 2.5567 2.5158C2.5567 1.7498 3.0897 1.1618 4.1157 0.9158C4.8127 0.7378 5.9337 0.6558 7.3687 0.6698H8.9687C14.0687 0.7248 17.5957 3.6508 17.5957 7.8478ZM22.4077 7.9018C22.4077 11.4708 20.3987 14.0958 18.1837 14.0958H16.3927C17.7457 12.0858 18.2657 10.3358 18.2657 7.8478C18.2657 5.3188 17.1167 3.1718 15.1207 1.7768H17.7327C20.2067 1.7768 22.4077 4.4438 22.4077 7.9018Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
