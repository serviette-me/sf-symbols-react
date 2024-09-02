import { IconProps } from "../../types"

export default function ArrowUpRightAndArrowDownLeftRectangleIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.03125 27.111328125"
          className={className}
        >
          <path
            d="              M5.3597 27.1113H27.6717C31.0487 27.1113 33.0317 25.1293 33.0317 21.7523V5.3592C33.0317 1.9683 31.0487 0.0003 27.6717 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H26.9337C27.7677 4.8532 28.1777 5.1953 28.1777 6.0972V21.0003C28.1777 21.9023 27.7677 22.2583 26.9337 22.2583ZM6.3577 15.0933C6.3577 15.9273 7.0547 16.6523 7.9027 16.6523C8.2987 16.6523 8.6817 16.4613 9.0237 16.1193L12.7147 12.4273L12.7697 12.3593V13.9043C12.7697 14.7933 13.4117 15.4493 14.2867 15.4493C15.1487 15.4493 15.8047 14.7933 15.8047 13.9043V8.7633C15.8047 7.8753 15.1347 7.2183 14.2457 7.2183H9.1057C8.2027 7.2183 7.5607 7.8613 7.5607 8.7363C7.5607 9.5973 8.2307 10.2543 9.1057 10.2543H10.6367L10.5687 10.3082L6.8907 13.9723C6.5627 14.3013 6.3577 14.6703 6.3577 15.0933ZM26.6597 12.0043C26.6597 11.1703 25.9497 10.4593 25.1157 10.4593C24.7187 10.4593 24.3357 10.6363 23.9937 10.9923L20.3027 14.6833L20.2347 14.7523L20.2477 14.1773V13.1933C20.2477 12.3043 19.6057 11.6623 18.7307 11.6623C17.8687 11.6623 17.2127 12.3043 17.2127 13.1933V18.3343C17.2127 19.2223 17.8827 19.8793 18.7717 19.8793H23.9117C24.8007 19.8793 25.4567 19.2503 25.4567 18.3612C25.4567 17.5003 24.7867 16.8433 23.9117 16.8433H22.9277L22.3807 16.8573L22.4497 16.8023L26.1267 13.1383C26.4547 12.8242 26.6597 12.4273 26.6597 12.0043Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.634765625 26.140625"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H27.8087C30.9397 26.1407 32.6347 24.4457 32.6347 21.3417V4.7987C32.6347 1.6957 30.9397 -0.0003 27.8087 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2227C3.5277 4.0607 4.1157 3.5277 5.2087 3.5277H27.4257C28.5197 3.5277 29.1077 4.0607 29.1077 5.2227V20.9177C29.1077 22.0797 28.5197 22.6137 27.4257 22.6137ZM5.6597 14.8477C5.6597 15.5317 6.2477 16.1187 6.9317 16.1187C7.2457 16.1187 7.5607 15.9827 7.8617 15.6817L12.5917 10.9377L13.1117 10.3767L13.0427 12.2637V13.4117C13.0427 14.1637 13.5487 14.6837 14.2737 14.6837C14.9977 14.6837 15.5177 14.1637 15.5177 13.4117V7.5467C15.5177 6.8087 14.9847 6.2757 14.2457 6.2757H8.2717C7.5337 6.2757 7.0137 6.7947 7.0137 7.5197C7.0137 8.2437 7.5607 8.7637 8.2717 8.7637H9.4337L11.4027 8.6957L10.8417 9.2007L6.1117 13.9177C5.8107 14.2187 5.6597 14.5197 5.6597 14.8477ZM27.0707 11.2797C27.0707 10.6097 26.4827 10.0077 25.7987 10.0077C25.4847 10.0077 25.1697 10.1577 24.8687 10.4587L20.1387 15.1897L19.6187 15.7637L19.6877 13.8767V12.7147C19.6877 11.9767 19.1677 11.4567 18.4437 11.4567C17.7327 11.4567 17.2127 11.9767 17.2127 12.7147V18.5937C17.2127 19.3317 17.7457 19.8517 18.4847 19.8517H24.4587C25.1977 19.8517 25.7167 19.3457 25.7167 18.6077C25.7167 17.8967 25.1697 17.3767 24.4587 17.3767H23.2967L21.3277 17.4457L21.8887 16.9397L26.6187 12.2227C26.9067 11.9217 27.0707 11.6077 27.0707 11.2797Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.83984375 26.66015625"
          className={className}
        >
          <path
            d="              M5.1137 26.6605H27.7267C30.9937 26.6605 32.8397 24.8145 32.8397 21.5605V5.0995C32.8397 1.8455 30.9937 -0.0005 27.7267 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9585V5.7015C4.2247 4.6625 4.7167 4.2385 5.6877 4.2385H27.1657C28.1227 4.2385 28.6157 4.6625 28.6157 5.7015V20.9585C28.6157 21.9985 28.1227 22.4355 27.1657 22.4355ZM6.0297 14.9845C6.0297 15.7495 6.6717 16.4065 7.4377 16.4065C7.8067 16.4065 8.1487 16.2425 8.4767 15.9145L12.6597 11.7305L12.9337 11.4295L12.8927 12.6195V13.6855C12.8927 14.5055 13.4807 15.0935 14.2867 15.0935C15.0797 15.0935 15.6677 14.5055 15.6677 13.6855V8.1895C15.6677 7.3695 15.0667 6.7815 14.2457 6.7815H8.7087C7.8887 6.7815 7.3007 7.3555 7.3007 8.1755C7.3007 8.9685 7.9157 9.5565 8.7087 9.5565H9.7757L10.9927 9.5155L10.6917 9.7895L6.5217 13.9455C6.2067 14.2595 6.0297 14.6015 6.0297 14.9845ZM26.8517 11.6755C26.8517 10.9105 26.2087 10.2535 25.4437 10.2535C25.0747 10.2535 24.7327 10.4175 24.4047 10.7465L20.2207 14.9295L19.9477 15.2305L19.9887 14.0415V12.9745C19.9887 12.1545 19.4007 11.5665 18.5937 11.5665C17.8007 11.5665 17.2127 12.1545 17.2127 12.9745V18.4705C17.2127 19.2915 17.8147 19.8785 18.6347 19.8785H24.1717C24.9927 19.8785 25.5797 19.3045 25.5797 18.4845C25.5797 17.6915 24.9647 17.1035 24.1717 17.1035H23.1057L21.8887 17.1445L22.1897 16.8715L26.3597 12.7145C26.6737 12.4005 26.8517 12.0585 26.8517 11.6755Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.01953125 24.759765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7601H27.9867C30.6657 24.7601 32.0197 23.3921 32.0197 20.7671V3.9921C32.0197 1.3671 30.6657 0.0001 27.9867 0.0001H4.0337C1.3677 0.0001 -0.0003 1.3531 -0.0003 3.9921V20.7671C-0.0003 23.4061 1.3677 24.7601 4.0337 24.7601ZM4.0607 23.0641C2.5297 23.0641 1.6957 22.2581 1.6957 20.6721V4.0881C1.6957 2.5021 2.5297 1.6951 4.0607 1.6951H27.9587C29.4627 1.6951 30.3247 2.5021 30.3247 4.0881V20.6721C30.3247 22.2581 29.4627 23.0641 27.9587 23.0641ZM5.1267 14.4241C5.1267 14.8341 5.4687 15.1891 5.8787 15.1891C6.0707 15.1891 6.2617 15.1071 6.4527 14.9161L12.3187 9.0511L13.6447 7.6421L13.5347 11.1421V12.5781C13.5347 13.0291 13.8357 13.3441 14.2867 13.3441C14.7387 13.3441 15.0527 13.0291 15.0527 12.5781V6.0431C15.0527 5.5781 14.7247 5.2641 14.2597 5.2641H7.3007C6.8357 5.2641 6.5347 5.5641 6.5347 6.0291C6.5347 6.4801 6.8637 6.7811 7.3007 6.7811H8.7497L12.6597 6.6581L11.2517 7.9981L5.4007 13.8491C5.1957 14.0411 5.1267 14.2321 5.1267 14.4241ZM27.3167 10.3221C27.3167 9.9121 26.9747 9.5561 26.5507 9.5561C26.3727 9.5561 26.1817 9.6391 25.9907 9.8301L20.1247 15.6951L18.7987 17.1031L18.9087 13.6031V12.1681C18.9087 11.7031 18.6077 11.4021 18.1567 11.4021C17.7047 11.4021 17.3907 11.7031 17.3907 12.1681V18.7031C17.3907 19.1681 17.7187 19.4691 18.1837 19.4691H25.1427C25.5937 19.4691 25.9087 19.1681 25.9087 18.7171C25.9087 18.2651 25.5797 17.9651 25.1427 17.9651H23.6937L19.7837 18.0741L21.1917 16.7481L27.0427 10.8961C27.2347 10.6911 27.3167 10.5141 27.3167 10.3221Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.388671875 25.51171875"
          className={className}
        >
          <path
            d="              M4.4847 25.5113H27.9047C30.8577 25.5113 32.3887 23.9943 32.3887 21.0823V4.4293C32.3887 1.5173 30.8577 0.0003 27.9047 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5043 -0.0003 4.4293V21.0823C-0.0003 23.9943 1.5317 25.5113 4.4847 25.5113ZM4.6487 22.8323C3.3767 22.8323 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6663 4.6487 2.6663H27.7407C28.9977 2.6663 29.7087 3.3363 29.7087 4.6623V20.8493C29.7087 22.1753 28.9977 22.8323 27.7407 22.8323ZM5.2227 14.6973C5.2227 15.2713 5.7147 15.7773 6.3027 15.7773C6.5767 15.7773 6.8357 15.6683 7.1097 15.3813L12.5097 9.9803L13.3167 9.1053L13.2207 11.8263V13.0973C13.2207 13.7403 13.6447 14.1773 14.2737 14.1773C14.9027 14.1773 15.3397 13.7403 15.3397 13.0973V6.7543C15.3397 6.1113 14.8887 5.6743 14.2327 5.6743H7.7387C7.0957 5.6743 6.6587 6.0973 6.6587 6.7403C6.6587 7.3693 7.1227 7.7933 7.7387 7.7933H9.0237L11.8807 7.6833L11.0057 8.4903L5.6187 13.8773C5.3457 14.1643 5.2227 14.4243 5.2227 14.6973ZM27.3297 10.8143C27.3297 10.2403 26.8247 9.7203 26.2367 9.7203C25.9767 9.7203 25.7027 9.8433 25.4297 10.1173L20.0297 15.5173L19.2227 16.4063L19.3317 13.6723V12.4143C19.3317 11.7583 18.8947 11.3203 18.2657 11.3203C17.6507 11.3203 17.1997 11.7583 17.1997 12.4143V18.7443C17.1997 19.3863 17.6637 19.8383 18.3067 19.8383H24.8007C25.4437 19.8383 25.8947 19.4003 25.8947 18.7713C25.8947 18.1423 25.4157 17.7053 24.8007 17.7053H23.5297L20.6587 17.8143L21.5337 17.0083L26.9337 11.6213C27.2067 11.3473 27.3297 11.0883 27.3297 10.8143Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.23828125 25.169921875"
          className={className}
        >
          <path
            d="              M4.2927 25.1702H27.9457C30.8167 25.1702 32.2387 23.7622 32.2387 20.9452V4.2382C32.2387 1.4222 30.8167 0.0002 27.9457 0.0002H4.2927C1.4357 0.0002 -0.0003 1.4222 -0.0003 4.2382V20.9452C-0.0003 23.7622 1.4357 25.1702 4.2927 25.1702ZM4.3207 22.9692C2.9527 22.9692 2.2017 22.2442 2.2017 20.8222V4.3612C2.2017 2.9392 2.9527 2.2012 4.3207 2.2012H27.9177C29.2717 2.2012 30.0367 2.9392 30.0367 4.3612V20.8222C30.0367 22.2442 29.2717 22.9692 27.9177 22.9692ZM4.9627 14.6152C4.9627 15.1352 5.4277 15.5992 5.9607 15.5992C6.1937 15.5992 6.4257 15.4902 6.6857 15.2302L12.4687 9.4612L13.4397 8.3942L13.3167 11.5942V12.9202C13.3167 13.5212 13.6997 13.9182 14.2737 13.9182C14.8477 13.9182 15.2437 13.5212 15.2437 12.9202V6.3302C15.2437 5.7422 14.8337 5.3452 14.2327 5.3452H7.4517C6.8497 5.3452 6.4527 5.7282 6.4527 6.3032C6.4527 6.8772 6.8767 7.2732 7.4517 7.2732H8.7907L12.1547 7.1362L11.1017 8.1072L5.3317 13.8772C5.0727 14.1362 4.9627 14.3692 4.9627 14.6152ZM27.4667 10.5542C27.4667 10.0352 27.0157 9.5702 26.4827 9.5702C26.2497 9.5702 26.0177 9.6792 25.7437 9.9392L19.9747 15.7092L19.0037 16.7752L19.1267 13.5762V12.2502C19.1267 11.6482 18.7437 11.2522 18.1697 11.2522C17.5957 11.2522 17.1997 11.6482 17.1997 12.2502V18.8402C17.1997 19.4282 17.6097 19.8382 18.2107 19.8382H24.9927C25.5797 19.8382 25.9907 19.4412 25.9907 18.8672C25.9907 18.2932 25.5527 17.9102 24.9927 17.9102H23.6527L20.2887 18.0332L21.3277 17.0762L27.1117 11.2932C27.3707 11.0332 27.4667 10.8012 27.4667 10.5542Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.498046875 25.78515625"
          className={className}
        >
          <path
            d="              M4.6347 25.785H27.8637C30.8847 25.785 32.4977 24.186 32.4977 21.191V4.594C32.4977 1.6 30.8847 0 27.8637 0H4.6347C1.6137 0 -0.0003 1.586 -0.0003 4.594V21.191C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.736C3.6917 22.736 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H27.6037C28.7927 3.049 29.4497 3.65 29.4497 4.908V20.877C29.4497 22.135 28.7927 22.736 27.6037 22.736ZM5.4137 14.766C5.4137 15.381 5.9477 15.928 6.5767 15.928C6.8637 15.928 7.1507 15.805 7.4377 15.518L12.5507 10.404L13.2207 9.652L13.1387 12.018V13.234C13.1387 13.918 13.6037 14.396 14.2737 14.396C14.9437 14.396 15.4217 13.918 15.4217 13.234V7.096C15.4217 6.412 14.9297 5.934 14.2457 5.934H7.9707C7.2867 5.934 6.8087 6.398 6.8087 7.082C6.8087 7.738 7.3147 8.217 7.9707 8.217H9.2017L11.6757 8.121L10.9377 8.805L5.8247 13.904C5.5507 14.178 5.4137 14.465 5.4137 14.766ZM27.2067 11.02C27.2067 10.391 26.6877 9.844 26.0447 9.844C25.7577 9.844 25.4847 9.98 25.1977 10.268L20.0837 15.381L19.4007 16.133L19.4827 13.754V12.537C19.4827 11.854 19.0177 11.375 18.3477 11.375C17.6777 11.375 17.1997 11.854 17.1997 12.537V18.676C17.1997 19.359 17.6917 19.838 18.3887 19.838H24.6507C25.3337 19.838 25.8127 19.387 25.8127 18.703C25.8127 18.033 25.3067 17.568 24.6507 17.568H23.4197L20.9457 17.65L21.6837 16.98L26.7967 11.881C27.0837 11.594 27.2067 11.307 27.2067 11.02Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.71875 24.19921875"
          className={className}
        >
          <path
            d="              M3.6917 24.1997H28.0407C30.4607 24.1997 31.7187 22.9137 31.7187 20.5217V3.6777C31.7187 1.2847 30.4607 -0.0003 28.0407 -0.0003H3.6917C1.2717 -0.0003 -0.0003 1.2577 -0.0003 3.6777V20.5217C-0.0003 22.9417 1.2717 24.1997 3.6917 24.1997ZM3.7187 23.1877C1.9417 23.1877 1.0117 22.2577 1.0117 20.4807V3.7327C1.0117 1.9417 1.9417 1.0117 3.7187 1.0117H27.9997C29.7227 1.0117 30.7067 1.9417 30.7067 3.7327V20.4807C30.7067 22.2577 29.7227 23.1877 27.9997 23.1877ZM5.3187 14.1637C5.3187 14.4237 5.5237 14.6427 5.7967 14.6427C5.9067 14.6427 6.0297 14.5877 6.1387 14.4787L12.1137 8.5037L13.9177 6.6447L13.8357 10.5277V12.0997C13.8357 12.3867 14.0277 12.5917 14.3147 12.5917C14.5877 12.5917 14.7927 12.3867 14.7927 12.0997V5.6597C14.7927 5.3727 14.5877 5.1677 14.3007 5.1677H7.1097C6.8227 5.1677 6.6307 5.3597 6.6307 5.6467C6.6307 5.9337 6.8227 6.1247 7.1097 6.1247H8.6957L13.3167 6.0297L11.4567 7.8477L5.4827 13.8227C5.3727 13.9317 5.3187 14.0407 5.3187 14.1637ZM27.1117 10.0077C27.1117 9.7477 26.9067 9.5427 26.6467 9.5427C26.5237 9.5427 26.4137 9.5837 26.3047 9.6937L20.3297 15.6677L18.5257 17.5277L18.6077 13.6447V12.0727C18.6077 11.7847 18.4157 11.5797 18.1287 11.5797C17.8417 11.5797 17.6507 11.7847 17.6507 12.0727V18.5117C17.6507 18.7987 17.8557 19.0037 18.1427 19.0037H25.3337C25.6207 19.0037 25.8127 18.8127 25.8127 18.5257C25.8127 18.2387 25.6077 18.0467 25.3337 18.0467H23.7477L19.1267 18.1427L20.9867 16.3247L26.9607 10.3497C27.0707 10.2407 27.1117 10.1307 27.1117 10.0077Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.568359375 23.92578125"
          className={className}
        >
          <path
            d="              M3.5137 23.926H28.0687C30.3517 23.926 31.5687 22.668 31.5687 20.412V3.514C31.5687 1.258 30.3517 0 28.0687 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.412C-0.0003 22.709 1.2167 23.926 3.5137 23.926ZM3.5407 23.256C1.6547 23.256 0.6697 22.272 0.6697 20.371V3.541C0.6697 1.654 1.6547 0.67 3.5407 0.67H28.0277C29.8457 0.67 30.8987 1.654 30.8987 3.541V20.371C30.8987 22.272 29.8457 23.256 28.0277 23.256ZM5.4277 14.041C5.4277 14.219 5.5647 14.355 5.7427 14.355C5.8247 14.355 5.9197 14.328 5.9747 14.26L12.0037 8.23L14.0547 6.139L13.9867 10.213V11.867C13.9867 12.072 14.1227 12.209 14.3147 12.209C14.5197 12.209 14.6567 12.072 14.6567 11.867V5.469C14.6567 5.264 14.5197 5.127 14.3147 5.127H7.0137C6.8087 5.127 6.6857 5.264 6.6857 5.469C6.6857 5.674 6.8087 5.797 7.0137 5.797H8.6677L13.6447 5.715L11.5527 7.779L5.5237 13.809C5.4547 13.863 5.4277 13.959 5.4277 14.041ZM27.0157 9.844C27.0157 9.666 26.8787 9.529 26.7017 9.529C26.6057 9.529 26.5237 9.557 26.4547 9.625L20.4397 15.654L18.3887 17.746L18.4567 13.672V12.018C18.4567 11.813 18.3207 11.689 18.1157 11.689C17.9237 11.689 17.7867 11.813 17.7867 12.018V18.416C17.7867 18.621 17.9237 18.758 18.1157 18.758H25.4297C25.6207 18.758 25.7577 18.621 25.7577 18.416C25.7577 18.225 25.6207 18.088 25.4297 18.088H23.7757L18.7987 18.17L20.8907 16.105L26.9197 10.076C26.9747 10.021 27.0157 9.926 27.0157 9.844Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}