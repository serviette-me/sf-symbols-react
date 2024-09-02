import { IconProps } from "../../types"

export default function BubbleLeftAndTextBubbleRightIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.6953125 33.400390625"
          className={className}
        >
          <path
            d="              M23.4337 27.7945H26.5507L31.0767 31.6915C32.2797 32.7165 33.7147 33.4005 34.7407 33.4005C36.4497 33.4005 37.5707 32.1565 37.5707 30.3105V27.7945H37.7067C41.3297 27.7945 43.6957 25.5255 43.6957 22.0525V12.7145C43.6957 8.9555 41.1247 6.4805 37.1877 6.4805H30.9257C30.6527 2.5565 27.8907 0.0005 23.8027 0.0005H7.1367C2.8437 0.0005 -0.0003 2.8435 -0.0003 7.1365V18.3345C-0.0003 22.6265 3.1587 25.4845 6.6587 25.4845H6.7947V28.0135C6.7947 29.9415 7.8887 31.0895 9.6387 31.0895C10.8147 31.0895 11.8397 30.6385 13.3027 29.3805L17.8147 25.4845H18.0197C19.1267 26.9475 21.0277 27.7945 23.4337 27.7945ZM10.7737 22.1345C10.7737 21.0415 10.1717 20.6305 9.2697 20.6305H7.5607C5.7837 20.6305 4.8537 19.7425 4.8537 17.9235V7.5465C4.8537 5.7285 5.7837 4.8535 7.5607 4.8535H23.3927C24.7737 4.8535 25.6487 5.3865 25.9627 6.4805H23.4337C19.5097 6.4805 16.9397 8.9555 16.9397 12.7145V20.6445C16.1187 20.7125 15.6817 21.0005 14.9567 21.6975L10.7737 25.7575ZM24.4047 23.2695C22.7087 23.2695 21.6287 22.1895 21.6287 20.5485V13.7405C21.6287 12.0855 22.7087 11.0195 24.4047 11.0195H36.2307C37.9257 11.0195 39.0057 12.0855 39.0057 13.7405V20.5485C39.0057 22.1895 37.9257 23.2695 36.2307 23.2695H35.2737C34.2617 23.2695 33.5917 23.9255 33.5917 24.9375V28.3825L29.6817 24.6505C28.8337 23.8025 27.6307 23.2695 26.6467 23.2695ZM26.6877 16.4885H33.9747C34.7677 16.4885 35.3827 15.7635 35.3827 15.0525C35.3827 14.2325 34.7947 13.5765 33.9747 13.5765H26.6877C25.8947 13.5765 25.2927 14.2465 25.2927 15.0525C25.2927 15.7915 25.9087 16.4885 26.6877 16.4885ZM26.6877 21.1645H31.7047C32.4847 21.1645 33.0857 20.4805 33.0857 19.7145C33.0857 18.9215 32.4977 18.2515 31.7047 18.2515H26.6877C25.8947 18.2515 25.2927 18.9495 25.2927 19.7145C25.2927 20.4805 25.9087 21.1645 26.6877 21.1645Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.48046875 32.333984375"
          className={className}
        >
          <path
            d="              M21.9977 27.0426H25.7717L30.3247 30.9396C31.3357 31.8146 32.2797 32.3336 33.1267 32.3336C34.4527 32.3336 35.2737 31.3766 35.2737 29.9416V27.0426H35.4787C39.2657 27.0426 41.4807 24.8416 41.4807 21.1636V12.7966C41.4807 8.9826 39.1567 6.6856 35.2327 6.6856H30.5427C30.5427 2.5426 28.0277 -0.0004 23.8437 -0.0004H6.6997C2.5157 -0.0004 -0.0003 2.5426 -0.0003 6.6996V17.5276C-0.0003 21.6836 2.6797 24.2406 6.4667 24.2406H6.8497V27.2756C6.8497 28.7656 7.6697 29.6816 9.0237 29.6816C9.9527 29.6816 10.6917 29.2856 11.8397 28.2876L16.4477 24.2406C17.4177 26.0316 19.3317 27.0426 21.9977 27.0426ZM9.8707 21.9846C9.8707 21.0546 9.4337 20.7126 8.5997 20.7126H6.9177C4.6347 20.7126 3.5277 19.5646 3.5277 17.3226V6.9046C3.5277 4.6626 4.6347 3.5276 6.9177 3.5276H23.6247C25.8127 3.5276 26.9337 4.5796 27.0157 6.6856H21.9977C18.0747 6.6856 15.7497 8.9826 15.7497 12.7966V20.7266C15.0937 20.7816 14.7107 20.9996 14.1507 21.5606L9.8707 25.7716ZM22.5037 23.6656C20.3167 23.6656 19.1957 22.5036 19.1957 20.3986L19.2087 13.3296C19.2087 11.2246 20.3167 10.0486 22.5037 10.0486H34.7267C36.9137 10.0486 38.0347 11.2246 38.0347 13.3296V20.3986C38.0347 22.5036 36.9137 23.6656 34.7267 23.6656H33.6187C32.8267 23.6656 32.2657 24.1716 32.2657 25.0746V28.5876L27.9997 24.6506C27.3437 24.0216 26.5507 23.6656 25.7717 23.6656ZM24.3497 15.8186H32.9357C33.6327 15.8186 34.1527 15.2306 34.1527 14.5876C34.1527 13.8906 33.6467 13.3436 32.9357 13.3436H24.3497C23.6527 13.3436 23.1467 13.8906 23.1467 14.5876C23.1467 15.2446 23.6657 15.8186 24.3497 15.8186ZM24.3497 20.6856H30.4887C31.1587 20.6856 31.6917 20.1386 31.6917 19.4546C31.6917 18.7716 31.1717 18.2106 30.4887 18.2106H24.3497C23.6527 18.2106 23.1467 18.7856 23.1467 19.4546C23.1467 20.1386 23.6657 20.6856 24.3497 20.6856Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.65625 32.908203125"
          className={className}
        >
          <path
            d="              M22.7637 27.4534H26.1817L30.7207 31.3494C31.8277 32.3064 33.0317 32.9084 33.9747 32.9084C35.5057 32.9084 36.4907 31.8004 36.4907 30.1464V27.4534H36.6547C40.3597 27.4534 42.6567 25.2114 42.6567 21.6424V12.7694C42.6567 8.9684 40.1957 6.5894 36.2717 6.5894H30.7477C30.6117 2.5704 27.9457 0.0004 23.8297 0.0004H6.9317C2.6937 0.0004 -0.0003 2.7074 -0.0003 6.9454V17.9644C-0.0003 22.2034 2.9397 24.9104 6.5627 24.9104H6.8227V27.6724C6.8227 29.3944 7.7927 30.4334 9.3377 30.4334C10.4047 30.4334 11.2927 30.0094 12.6057 28.8754L17.1717 24.9104H17.2677C18.3067 26.5234 20.2207 27.4534 22.7637 27.4534ZM10.3497 22.0804C10.3497 21.0544 9.8167 20.6724 8.9547 20.6724H7.2597C5.2497 20.6724 4.2247 19.6734 4.2247 17.6504V7.2594C4.2247 5.2364 5.2497 4.2384 7.2597 4.2384H23.5017C25.2797 4.2384 26.2777 5.0174 26.4827 6.5894H22.7637C18.8267 6.5894 16.3787 8.9684 16.3787 12.7694V20.6994C15.6407 20.7544 15.2167 21.0134 14.5747 21.6424L10.3497 25.7714ZM23.5017 23.4744C21.5747 23.4744 20.4807 22.3534 20.4807 20.4944V13.5624C20.4807 11.6894 21.5747 10.5824 23.5017 10.5824H35.5197C37.4477 10.5824 38.5407 11.6894 38.5407 13.5624V20.4944C38.5407 22.3534 37.4477 23.4744 35.5197 23.4744H34.4937C33.5917 23.4744 32.9627 24.0484 32.9627 25.0194V28.4924L28.8887 24.6644C28.1227 23.9124 27.1117 23.4744 26.2367 23.4744ZM25.5937 16.1874H33.4957C34.2347 16.1874 34.7947 15.5314 34.7947 14.8474C34.7947 14.0824 34.2477 13.4804 33.4957 13.4804H25.5937C24.8417 13.4804 24.2817 14.0954 24.2817 14.8474C24.2817 15.5454 24.8557 16.1874 25.5937 16.1874ZM25.5937 20.9454H31.1307C31.8557 20.9454 32.4297 20.3304 32.4297 19.6054C32.4297 18.8674 31.8687 18.2524 31.1307 18.2524H25.5937C24.8417 18.2524 24.2817 18.8804 24.2817 19.6054C24.2817 20.3304 24.8557 20.9454 25.5937 20.9454Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.556640625 30.078125"
          className={className}
        >
          <path
            d="              M19.0857 25.4978H24.7457L29.1487 29.2848C29.7497 29.7908 30.1187 30.0778 30.6117 30.0778C31.3227 30.0778 31.7457 29.5588 31.7457 28.7788V25.4978H32.3207C35.7387 25.4978 37.5567 23.6658 37.5567 20.2888V12.2088C37.5567 8.8458 35.7387 6.9868 32.3207 6.9868H29.6817V5.8108C29.6817 2.1468 27.5767 -0.0002 23.8707 -0.0002H5.8107C2.1057 -0.0002 -0.0003 2.1328 -0.0003 5.8108V16.8028C-0.0003 20.4668 2.1057 22.5998 5.8107 22.5998H6.6857V26.2908C6.6857 27.1118 7.1097 27.6448 7.8477 27.6448C8.3677 27.6448 8.7367 27.3578 9.3517 26.8238L14.1637 22.5998H14.2047C14.8887 24.4998 16.5427 25.4978 19.0857 25.4978ZM8.2717 21.7108C8.2717 21.1368 8.0387 20.9178 7.4647 20.9178H5.8247C3.1177 20.9178 1.6957 19.4138 1.6957 16.7888V5.8238C1.6957 3.1858 3.1177 1.6948 5.8247 1.6948H23.8577C26.5367 1.6948 27.9867 3.1858 27.9867 5.8238V6.9868H19.0857C15.6677 6.9868 13.8497 8.8458 13.8497 12.2088V20.3028C13.8497 20.5218 13.8637 20.7268 13.8767 20.9178C13.4257 20.9588 13.1387 21.0818 12.7697 21.4648L8.2717 25.7308ZM19.1547 23.8168C16.6657 23.8168 15.5447 22.6408 15.5447 20.2208L15.5587 12.2778C15.5587 9.8848 16.6657 8.6818 19.1547 8.6818H32.2517C34.7407 8.6818 35.8477 9.8848 35.8477 12.2778V20.2068C35.8477 22.6128 34.7267 23.8168 32.2517 23.8168H30.9667C30.5157 23.8168 30.1467 24.0758 30.1467 24.6638V28.1228L25.8397 24.2808C25.4437 23.9258 25.1287 23.8168 24.6637 23.8168ZM20.7537 14.6968H30.7067C31.1717 14.6968 31.5137 14.3558 31.5137 13.9038C31.5137 13.4528 31.1717 13.1118 30.7067 13.1118H20.7537C20.2887 13.1118 19.9607 13.4528 19.9607 13.9038C19.9607 14.3558 20.2887 14.6968 20.7537 14.6968ZM20.7537 19.5238H28.0817C28.5197 19.5238 28.8747 19.1948 28.8747 18.7308C28.8747 18.2928 28.5197 17.9378 28.0817 17.9378H20.7537C20.2887 17.9378 19.9607 18.2928 19.9607 18.7308C19.9607 19.1948 20.2887 19.5238 20.7537 19.5238Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.05859375 31.650390625"
          className={className}
        >
          <path
            d="              M21.0817 26.5648H25.2797L29.8317 30.4608C30.7207 31.2398 31.3497 31.6508 32.0877 31.6508C33.1677 31.6508 33.8107 30.8848 33.8107 29.6958V26.5648H34.0567C37.9397 26.5648 40.0587 24.4178 40.0587 20.6038V12.8648C40.0587 9.0098 37.9117 6.8218 33.9747 6.8218H30.2837V6.4258C30.2837 2.3648 27.9727 -0.0002 23.8577 -0.0002H6.4257C2.3107 -0.0002 -0.0003 2.3518 -0.0003 6.4258V17.0218C-0.0003 21.0958 2.3657 23.4468 6.3297 23.4468H6.8907V26.8238C6.8907 28.0278 7.5337 28.7928 8.6267 28.7928C9.3927 28.7928 9.9667 28.4238 10.8967 27.5898L15.5317 23.5018C16.3927 25.4848 18.2927 26.5648 21.0817 26.5648ZM9.2967 21.8888C9.2967 21.0688 8.9547 20.7678 8.1757 20.7678H6.4937C3.9097 20.7678 2.6797 19.4548 2.6797 16.9398V6.5078C2.6797 3.9918 3.9097 2.6798 6.4937 2.6798H23.7757C26.3597 2.6798 27.6037 3.9918 27.6037 6.5078V6.8218H21.0817C17.1447 6.8218 14.9847 9.0098 14.9847 12.8648V20.6168C14.9847 20.6718 14.9977 20.7268 14.9977 20.7808C14.4517 20.8358 14.0957 21.0138 13.6307 21.4918L9.2967 25.7848ZM21.2867 23.9398C18.7847 23.9398 17.6507 22.7088 17.6507 20.3168V13.0708C17.6507 10.6778 18.7847 9.4468 21.2867 9.4468H33.7697C36.2717 9.4468 37.4067 10.6778 37.4067 13.0708V20.3168C37.4067 22.7088 36.2717 23.9398 33.7697 23.9398H32.5797C31.9097 23.9398 31.4047 24.3498 31.4047 25.1698V28.7248L26.9067 24.6508C26.3867 24.1578 25.8537 23.9398 25.2247 23.9398ZM22.8457 15.3948H32.2797C32.9087 15.3948 33.3727 14.9028 33.3727 14.3008C33.3727 13.6718 32.9087 13.2068 32.2797 13.2068H22.8457C22.2167 13.2068 21.7657 13.6718 21.7657 14.3008C21.7657 14.9028 22.2167 15.3948 22.8457 15.3948ZM22.8457 20.3848H29.6957C30.3107 20.3848 30.7887 19.9198 30.7887 19.3048C30.7887 18.6898 30.3107 18.1968 29.6957 18.1968H22.8457C22.2167 18.1968 21.7657 18.6898 21.7657 19.3048C21.7657 19.9198 22.2167 20.3848 22.8457 20.3848Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.265625 31.28125"
          className={className}
        >
          <path
            d="              M20.5627 26.2914H24.9927L29.5587 30.2014C30.3927 30.9124 30.8437 31.2814 31.4997 31.2814C32.4437 31.2814 32.9767 30.6114 32.9767 29.5724V26.2914H33.2637C37.2017 26.2914 39.2657 24.1714 39.2657 20.3024V12.9064C39.2657 9.0234 37.2017 6.9044 33.2637 6.9044H30.1327V6.2614C30.1327 2.2554 27.9457 0.0004 23.8707 0.0004H6.2617C2.1877 0.0004 -0.0003 2.2554 -0.0003 6.2614V16.7484C-0.0003 20.7544 2.1877 22.9964 6.2617 22.9964H6.9177V26.5644C6.9177 27.6174 7.4517 28.2874 8.4087 28.2874C9.0777 28.2874 9.5427 27.9314 10.3767 27.2074L15.0257 23.0784C15.8317 25.1704 17.7047 26.2914 20.5627 26.2914ZM8.9687 21.8344C8.9687 21.0824 8.6817 20.7954 7.9437 20.7954H6.2617C3.4997 20.7954 2.2017 19.4004 2.2017 16.7344V6.2754C2.2017 3.6094 3.4997 2.2014 6.2617 2.2014H23.8707C26.6187 2.2014 27.9317 3.6094 27.9317 6.2754V6.9044H20.5627C16.6247 6.9044 14.5607 9.0234 14.5607 12.9064V20.3024C14.5607 20.4804 14.5747 20.6584 14.5747 20.8224C14.0817 20.8634 13.7537 21.0274 13.3437 21.4514L8.9687 25.7854ZM20.6037 24.0894C17.9237 24.0894 16.7757 22.8324 16.7757 20.2754V12.9334C16.7757 10.3774 17.9237 9.1054 20.6037 9.1054H33.2367C35.9027 9.1054 37.0647 10.3774 37.0647 12.9334V20.2614C37.0647 22.8324 35.9027 24.0894 33.2367 24.0894H31.9787C31.3907 24.0894 30.9257 24.4454 30.9257 25.2114V28.7934L26.3047 24.6644C25.8537 24.2404 25.4707 24.0894 24.9097 24.0894ZM22.0117 15.1624H31.9097C32.4977 15.1624 32.9357 14.7244 32.9357 14.1504C32.9357 13.5624 32.4977 13.1254 31.9097 13.1254H22.0117C21.4097 13.1254 20.9867 13.5624 20.9867 14.1504C20.9867 14.7244 21.4097 15.1624 22.0117 15.1624ZM22.0117 20.2204H29.2577C29.8317 20.2204 30.2967 19.8104 30.2967 19.2224C30.2967 18.6484 29.8317 18.1834 29.2577 18.1834H22.0117C21.4097 18.1834 20.9867 18.6484 20.9867 19.2224C20.9867 19.8104 21.4097 20.2204 22.0117 20.2204Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.673828125 31.951171875"
          className={className}
        >
          <path
            d="              M21.4787 26.7692H25.4977L30.0367 30.6662C30.9937 31.4862 31.7457 31.9512 32.5387 31.9512C33.7147 31.9512 34.4397 31.1032 34.4397 29.8052V26.7692H34.6717C38.5137 26.7692 40.6737 24.6092 40.6737 20.8492V12.8382C40.6737 8.9962 38.4457 6.7672 34.5077 6.7672H30.3927V6.5352C30.3927 2.4472 27.9997 0.0002 23.8577 0.0002H6.5347C2.4067 0.0002 -0.0003 2.4332 -0.0003 6.5352V17.2542C-0.0003 21.3552 2.5017 23.7892 6.3847 23.7892H6.8767V27.0152C6.8767 28.3552 7.5877 29.1762 8.7907 29.1762C9.6387 29.1762 10.2817 28.7932 11.3067 27.8902L15.9277 23.8302C16.8297 25.7302 18.7437 26.7692 21.4787 26.7692ZM9.5427 21.9302C9.5427 21.0682 9.1597 20.7402 8.3677 20.7402H6.6717C4.2247 20.7402 3.0487 19.5102 3.0487 17.1172V6.6852C3.0487 4.2792 4.2247 3.0492 6.6717 3.0492H23.7207C26.1547 3.0492 27.3437 4.2792 27.3437 6.6852V6.7672H21.4787C17.5407 6.7672 15.3127 8.9962 15.3127 12.8382V20.7672C14.7247 20.8222 14.3557 21.0132 13.8497 21.5332L9.5427 25.7712ZM21.8067 23.8302C19.4417 23.8302 18.3207 22.6272 18.3207 20.3572V13.1932C18.3207 10.9242 19.4417 9.7072 21.8067 9.7072H34.1797C36.5447 9.7072 37.6797 10.9242 37.6797 13.1932V20.3572C37.6797 22.6272 36.5447 23.8302 34.1797 23.8302H33.0317C32.3067 23.8302 31.7737 24.2812 31.7737 25.1292V28.6702L27.3847 24.6502C26.7967 24.1032 26.1547 23.8302 25.4567 23.8302ZM23.5017 15.5862H32.5667C33.2227 15.5862 33.7147 15.0532 33.7147 14.4372C33.7147 13.7672 33.2227 13.2752 32.5667 13.2752H23.5017C22.8317 13.2752 22.3537 13.7672 22.3537 14.4372C22.3537 15.0532 22.8457 15.5862 23.5017 15.5862ZM23.5017 20.5212H30.0367C30.6797 20.5212 31.1857 20.0152 31.1857 19.3732C31.1857 18.7302 30.6797 18.2112 30.0367 18.2112H23.5017C22.8317 18.2112 22.3537 18.7302 22.3537 19.3732C22.3537 20.0152 22.8457 20.5212 23.5017 20.5212Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.287109375 28.4921875"
          className={className}
        >
          <path
            d="              M17.1177 24.4725H24.4177L28.6157 28.0825C28.9157 28.3415 29.1617 28.4925 29.4357 28.4925C29.8457 28.4925 30.1057 28.1915 30.1057 27.7405V24.4725H31.0897C33.8107 24.4725 35.2867 22.9965 35.2867 20.2895V11.3205C35.2867 8.6135 33.8107 7.1235 31.0897 7.1235H29.0797V5.2085C29.0797 2.0235 27.0977 -0.0005 23.8707 -0.0005H5.2087C1.9827 -0.0005 -0.0003 1.9965 -0.0003 5.2085V16.8985C-0.0003 20.1115 1.9827 22.0935 5.2087 22.0935H6.3707V25.9625C6.3707 26.4685 6.6717 26.7965 7.1097 26.7965C7.4237 26.7965 7.6697 26.6055 7.9977 26.3325L12.9197 22.0935H13.1797C13.7127 23.6525 15.0667 24.4725 17.1177 24.4725ZM7.3277 21.5745C7.3277 21.2185 7.1917 21.0825 6.8357 21.0825H5.2367C2.6117 21.0825 1.0117 19.4685 1.0117 16.8575V5.2365C1.0117 2.6385 2.6117 1.0255 5.2367 1.0255H23.8437C26.4137 1.0255 28.0547 2.6385 28.0547 5.2365V7.1235H17.1177C14.3827 7.1235 12.9067 8.6135 12.9067 11.3205V20.3165C12.9067 20.5765 12.9197 20.8355 12.9477 21.0825C12.5917 21.0825 12.3727 21.1645 12.0177 21.4925L7.3277 25.6625ZM17.2407 23.4605C15.0117 23.4605 13.9317 22.3945 13.9317 20.1795L13.9457 11.4295C13.9457 9.2425 15.0117 8.1345 17.2407 8.1345H30.9527C33.1957 8.1345 34.2617 9.2425 34.2617 11.4295V20.1525C34.2617 22.3675 33.1817 23.4605 30.9527 23.4605H29.6267C29.3537 23.4605 29.1347 23.6115 29.1347 23.9535V27.2615L25.2247 23.8025C24.9097 23.5295 24.6917 23.4605 24.3357 23.4605ZM19.0857 14.0955H29.1347C29.4087 14.0955 29.6267 13.8765 29.6267 13.6035C29.6267 13.3305 29.4087 13.1115 29.1347 13.1115H19.0857C18.8127 13.1115 18.5937 13.3305 18.5937 13.6035C18.5937 13.8765 18.8127 14.0955 19.0857 14.0955ZM19.0857 18.6075H26.5097C26.7837 18.6075 27.0017 18.3885 27.0017 18.1155C27.0017 17.8415 26.7837 17.6235 26.5097 17.6235H19.0857C18.8127 17.6235 18.5937 17.8415 18.5937 18.1155C18.5937 18.3885 18.8127 18.6075 19.0857 18.6075Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.125 27.671875"
          className={className}
        >
          <path
            d="              M16.1187 23.9254H24.2407L28.3417 27.4534C28.4787 27.5764 28.6697 27.6724 28.8337 27.6724C29.0797 27.6724 29.2717 27.4804 29.2717 27.1934V23.9254H30.4477C32.8127 23.9254 34.1247 22.6404 34.1247 20.2754V10.8554C34.1247 8.4904 32.8127 7.1774 30.4477 7.1774H28.7657V4.8944C28.7657 1.9414 26.8517 0.0004 23.8707 0.0004H4.8947C1.9137 0.0004 -0.0003 1.9144 -0.0003 4.8944V16.9254C-0.0003 19.9064 1.9137 21.8204 4.8947 21.8204H6.2207V25.7714C6.2207 26.1274 6.4397 26.3454 6.7267 26.3454C6.9457 26.3454 7.1227 26.2094 7.3147 26.0584L12.2907 21.8204H12.6467C13.1117 23.2014 14.3007 23.9254 16.1187 23.9254ZM6.8497 21.4924C6.8497 21.2594 6.7537 21.1504 6.5217 21.1504H4.9357C2.3517 21.1504 0.6697 19.4684 0.6697 16.8984V4.9224C0.6697 2.3514 2.3517 0.6704 4.9357 0.6704H23.8437C26.3457 0.6704 28.0957 2.3514 28.0957 4.9224V7.1774H16.1187C13.7267 7.1774 12.4137 8.4904 12.4137 10.8554V20.3164C12.4137 20.6034 12.4417 20.8904 12.4827 21.1504H12.4417C12.0997 21.1504 11.9357 21.2184 11.6207 21.4924L6.8497 25.6074ZM16.2557 23.2554C14.1507 23.2554 13.1117 22.2574 13.1117 20.1524L13.1247 10.9924C13.1247 8.9004 14.1507 7.8474 16.2557 7.8474H30.2967C32.4157 7.8474 33.4417 8.9004 33.4417 10.9924V20.1114C33.4417 22.2164 32.3887 23.2554 30.2967 23.2554H28.9437C28.7657 23.2554 28.6157 23.3654 28.6157 23.5844V26.7974L24.9097 23.5564C24.6367 23.3104 24.4587 23.2554 24.1717 23.2554ZM18.2387 13.7814H28.3277C28.5057 13.7814 28.6567 13.6174 28.6567 13.4394C28.6567 13.2484 28.5057 13.0974 28.3277 13.0974H18.2387C18.0467 13.0974 17.8967 13.2484 17.8967 13.4394C17.8967 13.6174 18.0467 13.7814 18.2387 13.7814ZM18.2387 18.1294H25.7027C25.8947 18.1294 26.0447 17.9784 26.0447 17.7874C26.0447 17.6094 25.8947 17.4454 25.7027 17.4454H18.2387C18.0467 17.4454 17.8967 17.6094 17.8967 17.7874C17.8967 17.9784 18.0467 18.1294 18.2387 18.1294Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
