import { IconProps } from "../../types"

export default function CarFerryIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.962587904877484 35.08203125"
          className={className}
        >
          <path
            d="              M5.4675 19.7831H6.7115C7.4915 19.7831 8.1065 19.1681 8.1065 18.3891V16.8981C10.2525 17.0351 13.3425 17.1311 15.9675 17.1311C18.6065 17.1311 21.6965 17.0351 23.8425 16.8981V18.3891C23.8425 19.1681 24.4575 19.7831 25.2375 19.7831H26.4815C27.2605 19.7831 27.8755 19.1681 27.8755 18.3891V15.5311C28.2035 15.0531 28.3815 14.4651 28.3815 13.7811V12.1131C28.3815 10.1441 28.1905 9.0231 27.1925 7.8751L26.2075 6.7261C25.8385 5.0171 25.2095 3.2401 24.8815 2.5291C24.2525 1.2171 23.0635 0.3961 21.5325 0.1911C20.6575 0.0681 18.7975 0.0001 15.9675 0.0001C13.1515 0.0001 11.3055 0.0681 10.4165 0.1911C8.8855 0.3831 7.6825 1.2031 7.0675 2.5291C6.7525 3.2401 6.1105 5.0171 5.7415 6.7261L4.7565 7.8751C3.7585 9.0231 3.5675 10.1441 3.5675 12.1131V13.7811C3.5675 14.4651 3.7445 15.0531 4.0735 15.5311V18.3891C4.0735 19.1681 4.6885 19.7831 5.4675 19.7831ZM15.9675 14.3831C12.6045 14.3831 8.9815 14.2051 7.3675 14.0411C6.5755 13.9451 6.2195 13.5901 6.2195 12.8511V11.6761C6.2195 10.4731 6.5755 9.8571 6.9715 9.3381L8.2155 7.6971C8.3665 6.8631 8.9535 4.6891 9.3235 3.9241C9.6785 3.1991 10.2935 2.8981 10.9915 2.8031C11.7975 2.6801 13.3835 2.6111 15.9675 2.6111C18.5655 2.6111 20.1645 2.7071 20.9575 2.8031C21.6415 2.8851 22.2425 3.1991 22.6395 3.9511C22.9815 4.6351 23.5555 6.7951 23.7335 7.6971L24.9775 9.3381C25.3735 9.8571 25.7295 10.4731 25.7295 11.6761V12.8511C25.7295 13.5901 25.3735 13.9451 24.5805 14.0411C22.9675 14.2051 19.3445 14.3831 15.9675 14.3831ZM9.4465 6.0571C9.3095 6.6441 9.5695 7.0141 10.1985 7.0141C11.0865 6.9861 12.6585 6.9181 15.9675 6.9181C19.2895 6.9181 20.8625 6.9861 21.7505 7.0141C22.3795 7.0141 22.6395 6.6441 22.5025 6.0571C22.3795 5.5511 22.1335 4.8121 21.9835 4.5121C21.6685 3.8421 21.2315 3.6091 20.4385 3.5001C19.9735 3.4321 18.4695 3.4041 15.9675 3.4041C13.4795 3.4041 11.9755 3.4321 11.5105 3.5001C10.7175 3.6091 10.2935 3.8421 9.9655 4.5121C9.8155 4.8121 9.5825 5.5511 9.4465 6.0571ZM9.0355 13.5761C10.0885 13.5761 10.8815 12.7691 10.8815 11.7171C10.8815 10.6641 10.0885 9.8711 9.0355 9.8711C7.9835 9.8711 7.1765 10.6641 7.1765 11.7171C7.1765 12.7691 7.9835 13.5761 9.0355 13.5761ZM22.9125 13.5761C23.9655 13.5761 24.7725 12.7691 24.7725 11.7171C24.7725 10.6641 23.9655 9.8711 22.9125 9.8711C21.8605 9.8711 21.0675 10.6641 21.0675 11.7171C21.0675 12.7691 21.8605 13.5761 22.9125 13.5761ZM13.1925 13.0841H18.7565C19.5495 13.0841 20.1235 12.5101 20.1235 11.7171C20.1235 10.9371 19.5495 10.3631 18.7565 10.3631H13.1925C12.3995 10.3631 11.8255 10.9371 11.8255 11.7171C11.8255 12.5101 12.3995 13.0841 13.1925 13.0841ZM2.0905 35.0821H2.2135C7.0675 35.0821 7.3675 32.1971 9.2545 32.1971C11.1275 32.1971 11.5785 35.0821 15.9815 35.0821C20.3835 35.0821 20.8345 32.1971 22.7075 32.1971C24.5945 32.1971 24.8955 35.0821 29.7485 35.0821H29.8855C30.8975 35.0821 31.7035 34.2751 31.7035 33.2641C31.7035 32.2661 30.8975 31.4591 29.8855 31.4591H29.7485C29.0515 31.4591 28.4775 31.2671 27.6985 30.8031L31.1165 26.3051C32.9485 23.9121 31.6625 21.1911 28.6415 21.1911H3.3215C0.2995 21.1911 -0.9855 23.9121 0.8465 26.3051L4.2645 30.8031C3.4855 31.2671 2.9105 31.4591 2.2135 31.4591H2.0905C1.0785 31.4591 0.2585 32.2661 0.2585 33.2641C0.2585 34.2751 1.0785 35.0821 2.0905 35.0821ZM13.3695 30.2151C12.4405 29.5311 11.1005 28.5601 9.2545 28.5601C8.5305 28.5601 7.8875 28.7111 7.3135 28.9301L4.2915 24.8691C4.1825 24.7321 4.2645 24.5961 4.4285 24.5961H27.5335C27.6985 24.5961 27.7805 24.7321 27.6705 24.8691L24.6625 28.9431C24.0885 28.7111 23.4325 28.5601 22.7075 28.5601C20.8625 28.5601 19.5225 29.5311 18.6065 30.2151C17.6085 30.9391 16.9795 31.4591 15.9815 31.4591C14.9835 31.4591 14.3545 30.9391 13.3695 30.2151Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.169406177610227 33.6328125"
          className={className}
        >
          <path
            d="              M5.3304 19.2912H6.5334C7.3134 19.2912 7.9014 18.6892 7.9014 17.9242V16.4742C10.0754 16.5972 13.0824 16.6932 15.5714 16.6932C18.0734 16.6932 21.0674 16.5972 23.2414 16.4742V17.9242C23.2414 18.6892 23.8424 19.2912 24.6084 19.2912H25.8254C26.5904 19.2912 27.1924 18.6892 27.1924 17.9242V15.4082C27.5884 14.9572 27.8074 14.3552 27.8074 13.6172V11.9082C27.8074 10.0352 27.5334 8.9822 26.5494 7.8062L25.6474 6.7132C25.2914 4.9492 24.6354 3.1172 24.2934 2.3922C23.7194 1.1622 22.5714 0.3692 21.0944 0.1642C20.3154 0.0682 18.3194 0.0002 15.5714 0.0002C12.8504 0.0002 10.8404 0.0682 10.0614 0.1642C8.5844 0.3552 7.4364 1.1352 6.8484 2.3922C6.5064 3.1172 5.8644 4.9492 5.4944 6.7132L4.5924 7.8062C3.6214 8.9822 3.3484 10.0352 3.3484 11.9082V13.6172C3.3484 14.3552 3.5674 14.9432 3.9634 15.3942V17.9242C3.9634 18.6892 4.5514 19.2912 5.3304 19.2912ZM15.5714 14.4372C12.1944 14.4372 8.2014 14.2732 6.6024 14.0962C5.8504 14.0002 5.5494 13.6722 5.5494 12.9612V11.6892C5.5494 10.4182 5.8234 9.8302 6.3974 9.0782L7.5454 7.5602C7.7504 6.4262 8.3794 4.3062 8.7764 3.4722C9.0904 2.8032 9.6924 2.4612 10.4444 2.3652C11.1684 2.2692 12.9734 2.1872 15.5714 2.1872C18.1824 2.1872 20.0004 2.2832 20.6844 2.3652C21.4504 2.4612 22.0374 2.8032 22.3794 3.5002C22.7764 4.2932 23.3914 6.3982 23.5964 7.5602L24.7444 9.0782C25.3194 9.8302 25.6064 10.4312 25.6064 11.6892V12.9612C25.6064 13.6852 25.2914 14.0002 24.5394 14.0962C22.9404 14.2732 18.9484 14.4372 15.5714 14.4372ZM8.7214 6.2892C8.6124 6.7672 8.8304 7.0272 9.3364 7.0002C10.5804 6.9452 12.3174 6.8492 15.5714 6.8492C18.8384 6.8492 20.5614 6.9452 21.8054 7.0002C22.3254 7.0272 22.5304 6.7672 22.4204 6.2892C22.2424 5.4962 21.8874 4.4292 21.6554 4.0062C21.3544 3.4452 20.9854 3.2262 20.3284 3.1312C19.7414 3.0492 18.1824 3.0082 15.5714 3.0082C12.9594 3.0082 11.4014 3.0492 10.8134 3.1312C10.1574 3.2262 9.7874 3.4452 9.4874 4.0062C9.2684 4.4292 8.9124 5.4962 8.7214 6.2892ZM8.4894 13.4532C9.4874 13.4532 10.2394 12.7012 10.2394 11.7172C10.2394 10.7322 9.4874 9.9802 8.4894 9.9802C7.5044 9.9802 6.7664 10.7322 6.7664 11.7172C6.7664 12.7012 7.5044 13.4532 8.4894 13.4532ZM22.6534 13.4532C23.6374 13.4532 24.3894 12.7012 24.3894 11.7172C24.3894 10.7322 23.6374 9.9802 22.6534 9.9802C21.6684 9.9802 20.9164 10.7322 20.9164 11.7172C20.9164 12.7012 21.6684 13.4532 22.6534 13.4532ZM12.8644 13.0152H18.2914C19.0304 13.0152 19.5494 12.4822 19.5494 11.7442C19.5494 11.0062 19.0304 10.4862 18.2914 10.4862H12.8644C12.1254 10.4862 11.5924 11.0062 11.5924 11.7442C11.5924 12.4822 12.1254 13.0152 12.8644 13.0152ZM1.9264 33.6332H2.0354C6.5884 33.6332 6.9164 30.8032 8.9674 30.8032C10.9914 30.8032 11.5244 33.6332 15.5844 33.6332C19.6454 33.6332 20.1644 30.8032 22.1884 30.8032C24.2524 30.8032 24.5804 33.6332 29.1334 33.6332H29.2294C30.0084 33.6332 30.6234 33.0172 30.6234 32.2382C30.6234 31.4722 30.0084 30.8572 29.2294 30.8572H29.1334C28.1764 30.8572 27.4924 30.5562 26.6724 30.0232L30.4464 25.0332C31.9914 23.0232 30.9514 20.7262 28.3674 20.7262H2.8014C0.2174 20.7262 -0.8216 23.0232 0.7234 25.0332L4.4964 30.0232C3.6764 30.5562 2.9924 30.8572 2.0354 30.8572H1.9264C1.1604 30.8572 0.5454 31.4722 0.5454 32.2382C0.5454 33.0172 1.1604 33.6332 1.9264 33.6332ZM12.8234 29.5992C11.9074 28.9302 10.6764 28.0272 8.9674 28.0272C8.1334 28.0272 7.3954 28.2462 6.7664 28.5472L3.3074 23.8852C3.1024 23.6112 3.2394 23.3102 3.5944 23.3102H27.5754C27.9304 23.3102 28.0534 23.6112 27.8484 23.8852L24.4034 28.5472C23.7604 28.2462 23.0354 28.0272 22.1884 28.0272C20.4924 28.0272 19.2484 28.9302 18.3464 29.5992C17.3754 30.3242 16.6924 30.8572 15.5844 30.8572C14.4774 30.8572 13.7804 30.3242 12.8234 29.5992Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.58525569186346 34.3984375"
          className={className}
        >
          <path
            d="              M5.3969 19.5507H6.6269C7.4059 19.5507 8.0079 18.9497 8.0079 18.1697V16.7067C10.1679 16.8297 13.2169 16.9257 15.7869 16.9257C18.3439 16.9257 21.4059 16.8297 23.5529 16.7067V18.1697C23.5529 18.9497 24.1549 19.5507 24.9339 19.5507H26.1639C26.9439 19.5507 27.5449 18.9497 27.5449 18.1697V15.4767C27.9139 15.0117 28.1059 14.4097 28.1059 13.7127V12.0177C28.1059 10.1037 27.8729 9.0097 26.8889 7.8337L25.9459 6.7267C25.5759 4.9907 24.9479 3.1857 24.6059 2.4747C23.9899 1.1897 22.8279 0.3827 21.3239 0.1777C20.4899 0.0687 18.5759 -0.0003 15.7869 -0.0003C13.0119 -0.0003 11.0839 0.0687 10.2499 0.1777C8.7459 0.3687 7.5709 1.1757 6.9689 2.4747C6.6269 3.1857 5.9849 4.9907 5.6289 6.7267L4.6719 7.8337C3.6879 9.0097 3.4689 10.1037 3.4689 12.0177V13.7127C3.4689 14.4097 3.6599 15.0117 4.0159 15.4767V18.1697C4.0159 18.9497 4.6169 19.5507 5.3969 19.5507ZM15.7869 14.4097C12.4099 14.4097 8.6099 14.2457 6.9959 14.0687C6.2309 13.9727 5.9029 13.6307 5.9029 12.9067V11.6757C5.9029 10.4457 6.2169 9.8437 6.6959 9.2147L7.8989 7.6287C8.0759 6.6587 8.6779 4.5117 9.0609 3.7187C9.4029 3.0077 10.0039 2.6937 10.7289 2.5977C11.4939 2.4887 13.1899 2.4197 15.7869 2.4197C18.3849 2.4197 20.0799 2.5017 20.8319 2.5977C21.5429 2.6797 22.1449 3.0077 22.5139 3.7327C22.8829 4.4707 23.4709 6.6037 23.6759 7.6287L24.8649 9.2147C25.3439 9.8437 25.6719 10.4587 25.6719 11.6757V12.9067C25.6719 13.6307 25.3299 13.9727 24.5649 14.0687C22.9509 14.2457 19.1509 14.4097 15.7869 14.4097ZM9.1019 6.1657C8.9789 6.6997 9.2109 7.0277 9.7989 7.0137C10.8519 6.9727 12.4919 6.8907 15.7869 6.8907C19.0819 6.8907 20.7089 6.9727 21.7759 7.0137C22.3499 7.0277 22.5819 6.6997 22.4589 6.1657C22.3089 5.5237 22.0219 4.6347 21.8299 4.2797C21.5159 3.6507 21.1189 3.4317 20.3809 3.3227C19.8619 3.2537 18.3299 3.2127 15.7869 3.2127C13.2309 3.2127 11.6989 3.2537 11.1799 3.3227C10.4549 3.4317 10.0589 3.6507 9.7439 4.2797C9.5529 4.6347 9.2659 5.5237 9.1019 6.1657ZM8.7739 13.5217C9.7989 13.5217 10.5779 12.7427 10.5779 11.7167C10.5779 10.7047 9.7989 9.9257 8.7739 9.9257C7.7619 9.9257 6.9829 10.7047 6.9829 11.7167C6.9829 12.7427 7.7619 13.5217 8.7739 13.5217ZM22.7869 13.5217C23.8129 13.5217 24.5919 12.7427 24.5919 11.7167C24.5919 10.7047 23.8129 9.9257 22.7869 9.9257C21.7619 9.9257 20.9959 10.7047 20.9959 11.7167C20.9959 12.7427 21.7619 13.5217 22.7869 13.5217ZM13.0259 13.0427H18.5349C19.3009 13.0427 19.8479 12.4957 19.8479 11.7307C19.8479 10.9647 19.3009 10.4177 18.5349 10.4177H13.0259C12.2599 10.4177 11.7129 10.9647 11.7129 11.7307C11.7129 12.4957 12.2599 13.0427 13.0259 13.0427ZM2.0059 34.3987H2.1289C6.8319 34.3987 7.1469 31.5407 9.1149 31.5407C11.0709 31.5407 11.5489 34.3987 15.7869 34.3987C20.0259 34.3987 20.5179 31.5407 22.4589 31.5407C24.4279 31.5407 24.7419 34.3987 29.4589 34.3987H29.5689C30.4709 34.3987 31.1959 33.6737 31.1959 32.7857C31.1959 31.8967 30.4709 31.1717 29.5689 31.1717H29.4589C28.6389 31.1717 28.0099 30.9397 27.2169 30.4337L30.7989 25.7027C32.4939 23.4887 31.3189 20.9727 28.5159 20.9727H3.0729C0.2559 20.9727 -0.9061 23.4887 0.7889 25.7027L4.3709 30.4337C3.5779 30.9397 2.9489 31.1717 2.1289 31.1717H2.0059C1.1169 31.1717 0.3929 31.8967 0.3929 32.7857C0.3929 33.6737 1.1169 34.3987 2.0059 34.3987ZM13.1079 29.9277C12.1919 29.2577 10.8929 28.3147 9.1149 28.3147C8.3359 28.3147 7.6529 28.4927 7.0509 28.7517L3.8239 24.4047C3.6739 24.1997 3.7829 23.9807 4.0299 23.9807H27.5449C27.8049 23.9807 27.9139 24.1997 27.7499 24.4047L24.5369 28.7517C23.9359 28.4927 23.2519 28.3147 22.4589 28.3147C20.6819 28.3147 19.3969 29.2577 18.4809 29.9277C17.4959 30.6527 16.8399 31.1717 15.7869 31.1717C14.7479 31.1717 14.0779 30.6527 13.1079 29.9277Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.333788707545445 31.9375"
          className={className}
        >
          <path
            d="              M5.6631 18.7445H6.8391C7.6051 18.7445 8.1931 18.1565 8.1931 17.4045V15.9415C10.4081 16.0645 13.3201 16.1465 15.6581 16.1465C18.0091 16.1465 20.9351 16.0645 23.1361 15.9415L23.1501 17.4045C23.1501 18.1565 23.7381 18.7445 24.4901 18.7445H25.6651C26.4311 18.7445 27.0191 18.1565 27.0191 17.4045V15.1485C27.4561 14.7515 27.6751 14.2055 27.6751 13.5075V11.7035C27.6751 9.8845 27.2651 8.9415 26.3761 7.7925L25.5291 6.6855C25.1601 4.8535 24.4761 2.9255 24.1211 2.1735C23.5871 1.0525 22.5481 0.3415 21.1401 0.1365C20.4561 0.0545 18.2141 -0.0005 15.6581 -0.0005C13.1421 -0.0005 10.8861 0.0545 10.1891 0.1365C8.7941 0.3285 7.7551 1.0395 7.1951 2.1735C6.8531 2.9255 6.1691 4.8535 5.8001 6.6855L4.9531 7.7925C4.0641 8.9415 3.6541 9.8845 3.6541 11.7035V13.5075C3.6541 14.2055 3.8861 14.7655 4.3101 15.1485V17.4045C4.3101 18.1565 4.8981 18.7445 5.6631 18.7445ZM15.6581 14.7515C12.3081 14.7515 7.8371 14.6015 6.1281 14.3825C5.3491 14.2875 5.0481 13.9865 5.0481 13.2485V11.7035C5.0481 10.3355 5.2531 9.6795 6.0601 8.6545L7.1131 7.2735C7.3861 5.6735 8.0701 3.6505 8.4801 2.7895C8.8081 2.0785 9.4371 1.6545 10.3531 1.5445C10.9961 1.4765 13.0871 1.3805 15.6581 1.3805C18.2551 1.3805 20.3741 1.4765 20.9621 1.5445C21.8781 1.6675 22.5071 2.0785 22.8631 2.7895C23.2731 3.6505 23.9431 5.6875 24.2161 7.2735L25.2691 8.6545C26.0621 9.6795 26.2941 10.3355 26.2941 11.7035V13.2485C26.2941 13.9865 25.9801 14.3005 25.2011 14.3825C23.4921 14.5875 19.0351 14.7515 15.6581 14.7515ZM8.1381 6.3305C8.0701 6.6995 8.2471 6.8635 8.6171 6.8495C10.3261 6.7265 12.2261 6.6305 15.6581 6.6305C19.1031 6.6305 21.0031 6.7265 22.7121 6.8495C23.0811 6.8635 23.2591 6.6995 23.1911 6.3305C22.9041 5.0855 22.4391 3.7465 22.1111 3.1855C21.8101 2.6525 21.4271 2.4065 20.7981 2.3105C20.0601 2.2145 18.4061 2.1465 15.6581 2.1465C12.9231 2.1605 11.2691 2.2145 10.5311 2.3105C9.9151 2.4065 9.5191 2.6525 9.2051 3.1855C8.8901 3.7465 8.4251 5.0855 8.1381 6.3305ZM8.3161 13.2345C9.1911 13.2345 9.8611 12.5785 9.8611 11.6895C9.8611 10.8145 9.1911 10.1585 8.3161 10.1585C7.4271 10.1585 6.7851 10.8145 6.7851 11.6895C6.7851 12.5785 7.4271 13.2345 8.3161 13.2345ZM23.0131 13.2345C23.8881 13.2345 24.5581 12.5785 24.5581 11.6895C24.5581 10.8145 23.8881 10.1585 23.0131 10.1585C22.1241 10.1585 21.4821 10.8145 21.4821 11.6895C21.4821 12.5785 22.1241 13.2345 23.0131 13.2345ZM13.0461 12.9335H18.2831C18.9391 12.9335 19.3901 12.4825 19.3901 11.8265C19.3901 11.1565 18.9251 10.7055 18.2831 10.7055H13.0461C12.3901 10.7055 11.9391 11.1565 11.9391 11.8265C11.9391 12.4825 12.3901 12.9335 13.0461 12.9335ZM2.2591 31.9375H2.3411C6.4151 31.9375 6.7851 29.1625 9.1771 29.1625C11.5151 29.1625 12.1031 31.9375 15.6711 31.9375C19.2401 31.9375 19.8141 29.1625 22.1651 29.1625C24.5581 29.1625 24.9271 31.9375 29.0011 31.9375H29.0701C29.4941 31.9375 29.8221 31.5955 29.8221 31.1715C29.8221 30.7615 29.4941 30.4195 29.0701 30.4195H29.0011C27.7851 30.4195 26.9921 30.0235 26.1991 29.5035L30.8331 23.2835C31.8861 21.9025 31.2161 20.2755 29.3981 20.2755H1.9311C0.1261 20.2755 -0.5439 21.9155 0.4821 23.2835L5.1301 29.5035C4.3511 30.0235 3.5441 30.4195 2.3411 30.4195H2.2591C1.8491 30.4195 1.5071 30.7615 1.5071 31.1715C1.5071 31.5955 1.8491 31.9375 2.2591 31.9375ZM12.6361 29.1075C11.7341 28.4515 10.6671 27.6445 9.1771 27.6445C8.0011 27.6445 7.0991 28.1365 6.3201 28.6565L1.8221 22.5445C1.5481 22.1755 1.6991 21.6835 2.2461 21.6835H29.0831C29.6441 21.6835 29.7941 22.1625 29.5071 22.5585L25.0091 28.6565C24.2301 28.1365 23.3281 27.6445 22.1651 27.6445C20.6621 27.6445 19.5951 28.4515 18.7061 29.1075C17.7631 29.8185 16.9561 30.4195 15.6711 30.4195C14.3721 30.4195 13.5661 29.8185 12.6361 29.1075Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.651653110284833 32.703125"
          className={className}
        >
          <path
            d="              M5.2349 18.9627H6.4239C7.1899 18.9627 7.7779 18.3747 7.7779 17.6227V16.1877C9.9509 16.3107 12.9049 16.3927 15.3109 16.3927C17.7309 16.3927 20.6839 16.3107 22.8579 16.1877V17.6227C22.8579 18.3747 23.4459 18.9627 24.2109 18.9627H25.4009C26.1659 18.9627 26.7539 18.3747 26.7539 17.6227V15.2847C27.1919 14.8617 27.4379 14.2597 27.4379 13.5077V11.7577C27.4379 9.9667 27.0959 8.9547 26.1529 7.7517L25.2909 6.6857C24.9359 4.9087 24.2799 3.0347 23.9239 2.2967C23.3639 1.1077 22.2559 0.3557 20.8069 0.1507C20.1099 0.0547 18.0179 -0.0003 15.3109 -0.0003C12.6579 -0.0003 10.5389 0.0547 9.8279 0.1507C8.3929 0.3277 7.2849 1.0797 6.6979 2.2967C6.3689 3.0347 5.6999 4.9087 5.3299 6.6857L4.4959 7.7517C3.5389 8.9547 3.2109 9.9667 3.2109 11.7577V13.5077C3.2109 14.2597 3.4439 14.8617 3.8809 15.2847V17.6227C3.8809 18.3747 4.4689 18.9627 5.2349 18.9627ZM15.3109 14.4647C11.9339 14.4647 7.6959 14.3147 6.1099 14.1227C5.3989 14.0277 5.1119 13.7267 5.1119 13.0157V11.6757C5.1119 10.3907 5.3299 9.7887 6.0279 8.9007L7.1209 7.4647C7.3539 6.1247 8.0099 4.0607 8.4199 3.1857C8.7209 2.5297 9.2949 2.1597 10.1019 2.0777C10.7719 1.9957 12.7129 1.9007 15.3109 1.9007C17.9359 1.9007 19.9049 1.9957 20.5059 2.0777C21.3259 2.1737 21.9009 2.5297 22.2149 3.1997C22.6389 4.0747 23.2819 6.1387 23.5139 7.4647L24.6079 8.9007C25.2909 9.7887 25.5239 10.3907 25.5239 11.6757V13.0157C25.5239 13.7407 25.2499 14.0277 24.5259 14.1227C22.9259 14.3147 18.7009 14.4647 15.3109 14.4647ZM8.2699 6.4257C8.1739 6.8357 8.3519 7.0137 8.7889 6.9997C10.2519 6.9047 12.0979 6.8087 15.3109 6.8087C18.5369 6.8087 20.3829 6.9047 21.8459 6.9997C22.2829 7.0137 22.4609 6.8357 22.3659 6.4257C22.1469 5.4547 21.7229 4.1837 21.4359 3.6777C21.1619 3.1857 20.8339 2.9807 20.2599 2.8987C19.6039 2.8027 18.0039 2.7477 15.3109 2.7477C12.6309 2.7477 11.0319 2.8027 10.3749 2.8987C9.8009 2.9807 9.4729 3.1857 9.1999 3.6777C8.9119 4.1837 8.4889 5.4547 8.2699 6.4257ZM8.1469 13.3707C9.1039 13.3707 9.8149 12.6597 9.8149 11.7027C9.8149 10.7597 9.1039 10.0487 8.1469 10.0487C7.2029 10.0487 6.4919 10.7597 6.4919 11.7027C6.4919 12.6597 7.2029 13.3707 8.1469 13.3707ZM22.4749 13.3707C23.4319 13.3707 24.1429 12.6597 24.1429 11.7027C24.1429 10.7597 23.4319 10.0487 22.4749 10.0487C21.5319 10.0487 20.8209 10.7597 20.8209 11.7027C20.8209 12.6597 21.5319 13.3707 22.4749 13.3707ZM12.6449 12.9607H17.9909C18.6879 12.9607 19.1939 12.4687 19.1939 11.7577C19.1939 11.0467 18.6879 10.5547 17.9909 10.5547H12.6449C11.9339 10.5547 11.4419 11.0467 11.4419 11.7577C11.4419 12.4687 11.9339 12.9607 12.6449 12.9607ZM1.8299 32.7027H1.9119C6.2869 32.7027 6.6289 29.9007 8.7889 29.9007C10.9079 29.9007 11.4829 32.7027 15.3249 32.7027C19.1799 32.7027 19.7409 29.9007 21.8599 29.9007C24.0199 29.9007 24.3619 32.7027 28.7369 32.7027H28.8189C29.4339 32.7027 29.9399 32.1977 29.9399 31.5817C29.9399 30.9667 29.4339 30.4607 28.8189 30.4607H28.7369C27.6019 30.4607 26.8499 30.0777 26.0159 29.5177L30.0079 24.2267C31.3619 22.4357 30.4999 20.4117 28.1759 20.4117H2.4729C0.1619 20.4117 -0.7131 22.4497 0.6409 24.2267L4.6329 29.5177C3.7989 30.0777 3.0609 30.4607 1.9119 30.4607H1.8299C1.2149 30.4607 0.7089 30.9667 0.7089 31.5817C0.7089 32.1977 1.2149 32.7027 1.8299 32.7027ZM12.4669 29.2027C11.5649 28.5337 10.4029 27.6717 8.7889 27.6717C7.8729 27.6717 7.0939 27.9587 6.4379 28.3147L2.6779 23.2417C2.4179 22.8867 2.5819 22.4767 3.0609 22.4767H27.5879C28.0799 22.4767 28.2309 22.8867 27.9709 23.2417L24.2109 28.3147C23.5549 27.9457 22.7759 27.6717 21.8599 27.6717C20.2459 27.6717 19.0839 28.5337 18.1819 29.2027C17.2389 29.9137 16.5139 30.4607 15.3249 30.4607C14.1349 30.4607 13.4239 29.9137 12.4669 29.2027Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.36888878900792 32.169921875"
          className={className}
        >
          <path
            d="              M5.1835 18.7716H6.3595C7.1245 18.7716 7.7125 18.1976 7.7125 17.4456V16.0236C9.8865 16.1466 12.8125 16.2286 15.1775 16.2286C17.5425 16.2286 20.4545 16.1466 22.6425 16.0236L22.6565 17.4456C22.6565 18.1976 23.2305 18.7716 23.9955 18.7716H25.1715C25.9235 18.7716 26.5115 18.1976 26.5115 17.4456V15.2166C26.9765 14.8066 27.2365 14.2046 27.2365 13.4536V11.6756C27.2365 9.9256 26.8675 8.9416 25.9235 7.7246L25.1035 6.6856C24.7345 4.8676 24.0785 2.9946 23.7225 2.2426C23.1755 1.0796 22.0815 0.3416 20.6605 0.1366C19.9905 0.0546 17.8435 -0.0004 15.1775 -0.0004C12.5525 -0.0004 10.3785 0.0546 9.7085 0.1366C8.2865 0.3146 7.1935 1.0526 6.6195 2.2426C6.2775 2.9946 5.6075 4.8676 5.2385 6.6856L4.4455 7.7246C3.4885 8.9416 3.1325 9.9256 3.1325 11.6756V13.4536C3.1325 14.2046 3.3785 14.7926 3.8435 15.2166V17.4456C3.8435 18.1976 4.4315 18.7716 5.1835 18.7716ZM15.1775 14.4786C11.7865 14.4786 7.4115 14.3416 5.8265 14.1366C5.1425 14.0406 4.8825 13.7536 4.8825 13.0566V11.6756C4.8825 10.3636 5.0745 9.7756 5.8265 8.7906L6.8925 7.4106C7.1385 5.9606 7.8085 3.9236 8.2185 3.0216C8.5195 2.3926 9.0795 2.0096 9.9135 1.9136C10.5425 1.8456 12.5665 1.7366 15.1775 1.7366C17.8025 1.7366 19.8535 1.8456 20.4135 1.9136C21.2615 2.0236 21.8225 2.3926 22.1365 3.0216C22.5745 3.9376 23.2305 5.9886 23.4625 7.4106L24.5295 8.7906C25.2675 9.7756 25.4865 10.3766 25.4865 11.6756V13.0566C25.4865 13.7676 25.2125 14.0546 24.5155 14.1366C22.9295 14.3286 18.5685 14.4786 15.1775 14.4786ZM8.0135 6.5076C7.9315 6.8766 8.0955 7.0136 8.4785 6.9866C10.0785 6.8766 11.9785 6.7816 15.1775 6.7816C18.3765 6.7816 20.2775 6.8766 21.8765 6.9866C22.2595 7.0136 22.4235 6.8766 22.3415 6.5076C22.0955 5.4276 21.6445 4.0466 21.3165 3.4996C21.0565 3.0356 20.7425 2.8436 20.2365 2.7616C19.5255 2.6656 17.9115 2.5976 15.1775 2.5976C12.4435 2.5976 10.8295 2.6656 10.1195 2.7616C9.6135 2.8436 9.2985 3.0356 9.0255 3.4996C8.7105 4.0466 8.2595 5.4276 8.0135 6.5076ZM7.9585 13.3166C8.8885 13.3166 9.5855 12.6196 9.5855 11.7036C9.5855 10.7876 8.8885 10.0896 7.9585 10.0896C7.0425 10.0896 6.3455 10.7876 6.3455 11.7036C6.3455 12.6196 7.0425 13.3166 7.9585 13.3166ZM22.3825 13.3166C23.3125 13.3166 24.0095 12.6196 24.0095 11.7036C24.0095 10.7876 23.3125 10.0896 22.3825 10.0896C21.4665 10.0896 20.7695 10.7876 20.7695 11.7036C20.7695 12.6196 21.4665 13.3166 22.3825 13.3166ZM12.5385 12.9336H17.8165C18.5135 12.9336 18.9925 12.4546 18.9925 11.7576C18.9925 11.0746 18.4995 10.5956 17.8165 10.5956H12.5385C11.8415 10.5956 11.3635 11.0746 11.3635 11.7576C11.3635 12.4546 11.8415 12.9336 12.5385 12.9336ZM1.7795 32.1696H1.8475C6.1135 32.1696 6.4685 29.3946 8.6975 29.3946C10.8575 29.3946 11.4585 32.1696 15.1915 32.1696C18.9105 32.1696 19.5115 29.3946 21.6715 29.3946C23.9005 29.3946 24.2555 32.1696 28.5215 32.1696H28.5895C29.1225 32.1696 29.5465 31.7466 29.5465 31.2126C29.5465 30.6796 29.1225 30.2426 28.5895 30.2426H28.5215C27.2635 30.2426 26.4845 29.8046 25.6505 29.2306L29.7655 23.7616C31.0235 22.1206 30.2445 20.2346 28.0835 20.2346H2.2855C0.1245 20.2346 -0.6545 22.1206 0.6035 23.7616L4.7185 29.2306C3.8845 29.8046 3.1055 30.2426 1.8475 30.2426H1.7795C1.2455 30.2426 0.8225 30.6796 0.8225 31.2126C0.8225 31.7466 1.2455 32.1696 1.7795 32.1696ZM12.2795 28.9706C11.3765 28.3146 10.2555 27.4666 8.6975 27.4666C7.7265 27.4666 6.9335 27.7946 6.2495 28.1916L2.3395 22.8726C2.0385 22.4766 2.2165 21.9976 2.7635 21.9976H27.6055C28.1655 21.9976 28.3435 22.4766 28.0295 22.8866L24.1195 28.1916C23.4355 27.7946 22.6425 27.4666 21.6715 27.4666C20.1135 27.4666 18.9925 28.3146 18.0895 28.9706C17.1605 29.6956 16.4085 30.2426 15.1915 30.2426C13.9605 30.2426 13.2085 29.6956 12.2795 28.9706Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.878081734741492 33.099609375"
          className={className}
        >
          <path
            d="              M5.2781 19.0864H6.4811C7.2461 19.0864 7.8341 18.4984 7.8341 17.7464V16.2964C10.0081 16.4194 12.9891 16.5154 15.4221 16.5154C17.8831 16.5154 20.8501 16.4194 23.0241 16.2964V17.7464C23.0241 18.4984 23.6251 19.0864 24.3911 19.0864H25.5801C26.3461 19.0864 26.9481 18.4984 26.9481 17.7464V15.3264C27.3711 14.8884 27.5901 14.2874 27.5901 13.5484V11.8124C27.5901 9.9804 27.2891 8.9554 26.3191 7.7654L25.4441 6.6854C25.0881 4.9084 24.4321 3.0624 24.0901 2.3374C23.5161 1.1214 22.3951 0.3414 20.9321 0.1504C20.1941 0.0544 18.1431 0.0004 15.4221 0.0004C12.7431 0.0004 10.6781 0.0544 9.9261 0.1504C8.4771 0.3284 7.3561 1.0934 6.7681 2.3374C6.4261 3.0624 5.7701 4.9084 5.4011 6.6854L4.5391 7.7654C3.5821 8.9554 3.2681 9.9804 3.2681 11.8124V13.5484C3.2681 14.2874 3.5001 14.8884 3.9101 15.3264L3.9241 17.7464C3.9241 18.4984 4.5121 19.0864 5.2781 19.0864ZM15.4221 14.4374C12.0451 14.4374 7.9161 14.2874 6.3171 14.0954C5.5921 14.0134 5.3051 13.6854 5.3051 12.9884V11.6754C5.3051 10.3904 5.5511 9.7894 6.1941 8.9554L7.3151 7.4924C7.5201 6.2484 8.1621 4.1564 8.5731 3.3084C8.8871 2.6384 9.4611 2.2834 10.2541 2.1874C10.9381 2.1054 12.8251 2.0094 15.4221 2.0094C18.0471 2.0094 19.9481 2.1054 20.5901 2.1874C21.3831 2.2834 21.9571 2.6384 22.2991 3.3084C22.6961 4.1564 23.3251 6.2344 23.5571 7.4924L24.6641 8.9554C25.3071 9.7894 25.5671 10.4044 25.5671 11.6754V12.9884C25.5671 13.6994 25.2661 14.0134 24.5281 14.0954C22.9421 14.2874 18.8131 14.4374 15.4221 14.4374ZM8.4631 6.3574C8.3681 6.7944 8.5591 7.0134 9.0241 6.9864C10.4051 6.9044 12.1821 6.8224 15.4221 6.8224C18.6761 6.8224 20.4531 6.9044 21.8341 6.9864C22.2991 7.0134 22.4911 6.7944 22.3951 6.3574C22.1901 5.4554 21.7931 4.2794 21.5341 3.8144C21.2461 3.2814 20.9051 3.0764 20.2891 2.9944C19.6601 2.8984 18.0881 2.8434 15.4221 2.8434C12.7701 2.8434 11.1981 2.8984 10.5691 2.9944C9.9531 3.0764 9.6121 3.2814 9.3251 3.8144C9.0651 4.2794 8.6681 5.4554 8.4631 6.3574ZM8.2991 13.3984C9.2701 13.3984 9.9941 12.6604 9.9941 11.7034C9.9941 10.7324 9.2701 10.0074 8.2991 10.0074C7.3421 10.0074 6.6181 10.7324 6.6181 11.7034C6.6181 12.6604 7.3421 13.3984 8.2991 13.3984ZM22.5591 13.3984C23.5161 13.3984 24.2541 12.6604 24.2541 11.7034C24.2541 10.7324 23.5161 10.0074 22.5591 10.0074C21.5881 10.0074 20.8641 10.7324 20.8641 11.7034C20.8641 12.6604 21.5881 13.3984 22.5591 13.3984ZM12.7431 12.9744H18.1161C18.8401 12.9744 19.3461 12.4684 19.3461 11.7444C19.3461 11.0194 18.8401 10.5134 18.1161 10.5134H12.7431C12.0181 10.5134 11.5121 11.0194 11.5121 11.7444C11.5121 12.4554 12.0181 12.9744 12.7431 12.9744ZM1.8731 33.0994H1.9691C6.4121 33.0994 6.7541 30.2834 8.8731 30.2834C10.9521 30.2834 11.4981 33.0994 15.4361 33.0994C19.3731 33.0994 19.9341 30.2834 22.0121 30.2834C24.1181 30.2834 24.4591 33.0994 28.9031 33.0994H28.9981C29.6821 33.0994 30.2291 32.5394 30.2291 31.8554C30.2291 31.1714 29.6821 30.6254 28.9981 30.6254H28.9031C27.8501 30.6254 27.1251 30.2834 26.2911 29.7224L30.2021 24.5684C31.6371 22.6814 30.6941 20.5354 28.2601 20.5354H2.6121C0.1781 20.5354 -0.7519 22.6814 0.6701 24.5684L4.5801 29.7224C3.7461 30.2834 3.0221 30.6254 1.9691 30.6254H1.8731C1.1901 30.6254 0.6431 31.1714 0.6431 31.8554C0.6431 32.5394 1.1901 33.0994 1.8731 33.0994ZM12.6191 29.3674C11.7171 28.6974 10.5281 27.8084 8.8731 27.8084C7.9851 27.8084 7.2331 28.0684 6.5771 28.4104L2.9531 23.5024C2.7211 23.1874 2.8581 22.8184 3.2951 22.8184H27.5771C28.0141 22.8184 28.1641 23.1874 27.9181 23.5024L24.2951 28.4104C23.6531 28.0684 22.8871 27.8084 22.0121 27.8084C20.3441 27.8084 19.1551 28.6974 18.2521 29.3674C17.2951 30.0784 16.5841 30.6254 15.4361 30.6254C14.2871 30.6254 13.5771 30.0784 12.6191 29.3674Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.59570287920894 31.609375"
          className={className}
        >
          <path
            d="              M6.2866 18.6898H7.4626C8.2286 18.6898 8.8296 18.1018 8.8296 17.3358V15.8318C11.0726 15.9548 13.9976 16.0368 16.2946 16.0368C18.6056 16.0368 21.5446 15.9548 23.7866 15.8318V17.3358C23.7866 18.1018 24.3886 18.6898 25.1546 18.6898H26.3166C27.0816 18.6898 27.6976 18.1018 27.6976 17.3358V15.0528C28.0666 14.6968 28.2576 14.2048 28.2576 13.5758V11.7438C28.2576 9.8438 27.7926 8.9278 26.9866 7.8748L26.0706 6.6988C25.7006 4.8258 25.0036 2.8438 24.6486 2.0778C24.1426 1.0258 23.1446 0.3418 21.7906 0.1368C21.0666 0.0548 18.6876 -0.0002 16.2946 -0.0002C13.9296 -0.0002 11.5366 0.0548 10.8126 0.1368C9.4586 0.3418 8.4746 1.0118 7.9546 2.0778C7.5856 2.8438 6.9026 4.8258 6.5196 6.6988L5.6166 7.8748C4.8106 8.9278 4.3456 9.8438 4.3456 11.7438V13.5758C4.3456 14.2048 4.5366 14.7108 4.9196 15.0528L4.9336 17.3358C4.9336 18.1018 5.5216 18.6898 6.2866 18.6898ZM16.2946 15.1078C12.9866 15.1078 8.3786 14.9568 6.5056 14.7248C5.6166 14.6148 5.2756 14.2868 5.2756 13.4938V11.7438C5.2756 10.2948 5.5076 9.5568 6.3686 8.4488L7.3946 7.0958C7.7226 5.2908 8.4196 3.2808 8.8026 2.4748C9.1716 1.6678 9.8966 1.1898 10.9356 1.0798C11.5776 0.9978 13.7656 0.9158 16.2946 0.9158C18.8516 0.9158 21.0386 0.9978 21.6676 1.0798C22.6936 1.1898 23.4176 1.6678 23.8146 2.4748C24.1836 3.2808 24.8806 5.2908 25.2086 7.0958L26.2346 8.4488C27.0816 9.5568 27.3556 10.2948 27.3556 11.7438V13.4938C27.3556 14.2868 26.9726 14.6288 26.0976 14.7248C24.2246 14.9298 19.6306 15.1078 16.2946 15.1078ZM8.3106 6.0838C8.2556 6.4528 8.4336 6.6578 8.8166 6.6448C10.6346 6.5218 12.5626 6.4258 16.2946 6.4258C20.0406 6.4258 21.9546 6.5218 23.8006 6.6448C24.1836 6.6578 24.3476 6.4528 24.2926 6.0838C23.9506 4.6348 23.4996 3.3358 23.1576 2.7758C22.8166 2.1468 22.3106 1.8188 21.5316 1.7088C20.7656 1.5998 19.0426 1.5448 16.2946 1.5448C13.5466 1.5588 11.8376 1.5998 11.0726 1.7088C10.3066 1.8188 9.8006 2.1468 9.4316 2.7758C9.1166 3.3358 8.6386 4.6348 8.3106 6.0838ZM8.7756 13.1118C9.5956 13.1118 10.2106 12.5098 10.2106 11.6758C10.2106 10.8418 9.5956 10.2398 8.7756 10.2398C7.9416 10.2398 7.3536 10.8418 7.3536 11.6758C7.3536 12.5098 7.9416 13.1118 8.7756 13.1118ZM23.8146 13.1118C24.6486 13.1118 25.2636 12.5098 25.2636 11.6758C25.2636 10.8418 24.6486 10.2398 23.8146 10.2398C22.9936 10.2398 22.4066 10.8418 22.4066 11.6758C22.4066 12.5098 22.9936 13.1118 23.8146 13.1118ZM13.7246 12.9198H18.8786C19.4936 12.9198 19.9046 12.5238 19.9046 11.9078C19.9046 11.2798 19.4806 10.8688 18.8786 10.8688H13.7246C13.0956 10.8688 12.6996 11.2798 12.6996 11.9078C12.6996 12.5098 13.0956 12.9198 13.7246 12.9198ZM2.8966 31.6098H2.9646C6.7926 31.6098 7.1756 28.8338 9.8006 28.8338C12.3846 28.8338 12.9316 31.6098 16.2946 31.6098C19.6576 31.6098 20.2046 28.8338 22.7886 28.8338C25.4136 28.8338 25.7966 31.6098 29.6246 31.6098H29.6936C29.9666 31.6098 30.1856 31.3908 30.1856 31.1308C30.1856 30.8708 29.9666 30.6528 29.6936 30.6528H29.6246C28.4906 30.6528 27.6696 30.2968 26.9456 29.8458L32.2496 22.6548C33.0016 21.6288 32.4826 20.3168 31.1286 20.3168H1.4606C0.1076 20.3168 -0.3984 21.6558 0.3396 22.6548L5.6576 29.8458C4.9196 30.2968 4.1136 30.6528 2.9646 30.6528H2.8966C2.6366 30.6528 2.4176 30.8708 2.4176 31.1308C2.4176 31.3908 2.6366 31.6098 2.8966 31.6098ZM13.0956 29.2848C12.2066 28.6148 11.2086 27.8768 9.8006 27.8768C8.4336 27.8768 7.4626 28.5738 6.5746 29.2308C6.5196 29.2578 6.4786 29.2988 6.4376 29.3258L1.1466 22.1208C0.8866 21.7658 1.0236 21.2458 1.5566 21.2458H31.0326C31.5936 21.2458 31.7306 21.7518 31.4436 22.1348L26.1526 29.3128C26.1116 29.2848 26.0706 29.2578 26.0296 29.2308C25.1266 28.5738 24.1566 27.8768 22.7886 27.8768C21.3806 27.8768 20.3966 28.6148 19.4936 29.2848C18.5646 29.9958 17.6896 30.6528 16.2946 30.6528C14.9136 30.6528 14.0386 29.9958 13.0956 29.2848Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.255634224628 31.4453125"
          className={className}
        >
          <path
            d="              M6.6058 18.6624H7.7818C8.5468 18.6624 9.1618 18.0744 9.1618 17.3084V15.7774C11.4178 15.9004 14.3438 15.9824 16.6268 15.9824C18.9238 15.9824 21.8638 15.9004 24.1198 15.7774L24.1328 17.3084C24.1328 18.0744 24.7208 18.6624 25.4998 18.6624H26.6618C27.4278 18.6624 28.0428 18.0744 28.0428 17.3084V14.9984C28.3848 14.6704 28.5628 14.2054 28.5628 13.6174V11.7574C28.5628 9.8164 28.0708 8.9274 27.3048 7.9294L26.3618 6.7124C25.9928 4.8124 25.2818 2.8024 24.9258 2.0374C24.4198 1.0114 23.4628 0.3414 22.1228 0.1364C21.3848 0.0544 18.9378 0.0004 16.6268 0.0004C14.3298 0.0004 11.8828 0.0544 11.1448 0.1364C9.8048 0.3414 8.8478 1.0114 8.3418 2.0374C7.9728 2.8024 7.2758 4.8124 6.8928 6.7124L5.9628 7.9294C5.1978 8.9274 4.7048 9.8164 4.7048 11.7574V13.6174C4.7048 14.2184 4.8828 14.6834 5.2388 15.0114L5.2518 17.3084C5.2518 18.0744 5.8398 18.6624 6.6058 18.6624ZM16.6268 15.2984C13.3318 15.2984 8.6698 15.1344 6.7018 14.9024C5.7578 14.7934 5.3888 14.4374 5.3888 13.6174V11.7574C5.3888 10.2674 5.6348 9.5024 6.5238 8.3534L7.5358 7.0004C7.9048 5.0994 8.6018 3.0894 8.9708 2.3244C9.3808 1.4624 10.1468 0.9574 11.2268 0.8344C11.8828 0.7654 14.1118 0.6704 16.6268 0.6704C19.1568 0.6704 21.3988 0.7654 22.0408 0.8344C23.1078 0.9574 23.8868 1.4624 24.2968 2.3244C24.6658 3.0894 25.3638 5.0994 25.7188 7.0004L26.7448 8.3534C27.6198 9.5024 27.9068 10.2674 27.9068 11.7574V13.6174C27.9068 14.4374 27.4958 14.8064 26.5668 14.9024C24.6118 15.1074 19.9358 15.2984 16.6268 15.2984ZM8.4108 5.9744C8.3558 6.3434 8.5338 6.5484 8.9158 6.5484C10.8028 6.4124 12.7448 6.3164 16.6268 6.3164C20.5368 6.3164 22.4518 6.4124 24.3658 6.5484C24.7478 6.5484 24.9118 6.3434 24.8708 5.9744C24.5018 4.4164 24.0508 3.1444 23.6958 2.5564C23.3268 1.9004 22.7658 1.5314 21.9178 1.4084C21.1388 1.2984 19.3888 1.2444 16.6268 1.2444C13.8658 1.2574 12.1428 1.2984 11.3498 1.4084C10.5158 1.5314 9.9418 1.9004 9.5588 2.5564C9.2448 3.1444 8.7518 4.4164 8.4108 5.9744ZM9.0118 13.0434C9.8188 13.0434 10.4068 12.4684 10.4068 11.6754C10.4068 10.8694 9.8188 10.2954 9.0118 10.2954C8.2048 10.2954 7.6588 10.8694 7.6588 11.6754C7.6588 12.4684 8.2048 13.0434 9.0118 13.0434ZM24.2428 13.0434C25.0488 13.0434 25.6368 12.4684 25.6368 11.6754C25.6368 10.8694 25.0488 10.2954 24.2428 10.2954C23.4498 10.2954 22.8888 10.8694 22.8888 11.6754C22.8888 12.4684 23.4498 13.0434 24.2428 13.0434ZM14.0838 12.9334H19.1978C19.7858 12.9334 20.1818 12.5504 20.1818 11.9494C20.1818 11.3474 19.7718 10.9514 19.1978 10.9514H14.0838C13.4688 10.9514 13.0858 11.3474 13.0858 11.9494C13.0858 12.5234 13.4688 12.9334 14.0838 12.9334ZM3.2288 31.4454H3.2968C7.0018 31.4454 7.3848 28.6704 10.1328 28.6704C12.8398 28.6704 13.3728 31.4454 16.6268 31.4454C19.8808 31.4454 20.4278 28.6704 23.1208 28.6704C25.8698 28.6704 26.2518 31.4454 29.9568 31.4454H30.0258C30.2168 31.4454 30.3678 31.2954 30.3678 31.1034C30.3678 30.9254 30.2168 30.7754 30.0258 30.7754H29.9568C28.8498 30.7754 28.0428 30.4474 27.3318 30.0234L32.9788 22.3264C33.5938 21.4784 33.1428 20.3434 32.0358 20.3434H1.2188C0.1118 20.3434 -0.3262 21.5194 0.2618 22.3264L5.9218 30.0234C5.2108 30.4474 4.4048 30.7754 3.2968 30.7754H3.2288C3.0368 30.7754 2.8868 30.9254 2.8868 31.1034C2.8868 31.2954 3.0368 31.4454 3.2288 31.4454ZM13.3458 29.3674C12.4438 28.7114 11.4998 28.0004 10.1328 28.0004C8.8068 28.0004 7.8768 28.6704 6.9888 29.3264C6.8248 29.4354 6.6608 29.5454 6.4958 29.6684L0.7948 21.9024C0.5488 21.5604 0.6718 21.0274 1.2188 21.0274H32.0358C32.5958 21.0274 32.7188 21.5464 32.4458 21.9164L26.7578 29.6544C26.5938 29.5454 26.4298 29.4354 26.2658 29.3264C25.3768 28.6704 24.4478 28.0004 23.1208 28.0004C21.7678 28.0004 20.8108 28.7114 19.9218 29.3674C18.9788 30.0914 18.0628 30.7754 16.6268 30.7754C15.1918 30.7754 14.2888 30.0914 13.3458 29.3674Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}