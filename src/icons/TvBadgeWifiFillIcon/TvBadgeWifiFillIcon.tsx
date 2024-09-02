import { IconProps } from "../../types"

export default function TvBadgeWifiFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.396853637072496 31.486328125"
          className={className}
        >
          <path
            d="              M4.9357 26.0311H27.8087L26.5917 24.8281C25.5667 23.7891 25.4707 22.2301 26.4687 21.0411C28.8207 18.2791 32.7717 16.4471 36.8187 16.4471V4.9351C36.8187 1.8181 34.9997 0.0001 31.8827 0.0001H4.9357C1.8187 0.0001 -0.0003 1.8181 -0.0003 4.9351V21.0961C-0.0003 24.2261 1.8187 26.0311 4.9357 26.0311ZM29.0937 24.3361C29.3397 24.5821 29.7087 24.5271 29.9277 24.3081C31.7597 22.4631 34.0017 21.4651 36.6407 21.4651C39.2657 21.4651 41.6447 22.3261 43.3397 24.3081C43.5447 24.5551 43.9277 24.5821 44.1737 24.3361L45.2267 23.2691C45.4317 23.0511 45.4587 22.7501 45.2677 22.5171C43.3397 20.2621 39.9907 18.7031 36.6407 18.7031C33.2777 18.7031 29.9277 20.2621 28.0137 22.5171C27.8087 22.7501 27.8357 23.0511 28.0407 23.2691ZM32.1697 27.4121C32.4297 27.6721 32.7717 27.6721 33.0447 27.3571C33.9477 26.3461 35.3277 25.7441 36.6407 25.7441C37.9527 25.7441 39.2107 26.4691 40.2227 27.3571C40.5367 27.6311 40.8517 27.6721 41.1117 27.4121L42.3007 26.2361C42.5057 26.0451 42.5057 25.7301 42.3277 25.5251C41.0707 23.9941 38.9237 22.9821 36.6407 22.9821C34.3577 22.9821 32.2107 23.9941 30.9397 25.5251C30.7617 25.7301 30.7617 26.0451 30.9807 26.2361ZM36.6407 31.4861C36.8727 31.4861 37.0777 31.3911 37.4067 31.0621L39.1837 29.3261C39.3887 29.1211 39.4707 28.8891 39.3207 28.6421C38.7457 27.7671 37.6247 27.3031 36.6407 27.3031C35.6427 27.3031 34.5897 27.8221 33.9607 28.6421C33.7837 28.8611 33.8787 29.1211 34.0837 29.3261L35.8617 31.0621C36.1897 31.3911 36.3947 31.4861 36.6407 31.4861ZM10.8827 31.4861H25.9357C26.9747 31.4861 27.7817 30.6111 27.7817 29.6541C27.7817 28.6971 26.9747 27.8221 25.9357 27.8221H10.8827C9.8437 27.8221 9.0367 28.6971 9.0367 29.6541C9.0367 30.6111 9.8437 31.4861 10.8827 31.4861Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.66671936211787 29.708984375"
          className={className}
        >
          <path
            d="              M4.2247 24.363H26.9197L25.8947 23.352C24.9787 22.436 24.9097 21.014 25.7717 19.975C27.9587 17.336 31.7187 15.654 35.5057 15.654V4.225C35.5057 1.477 34.0017 0 31.2817 0H4.2247C1.5037 0 -0.0003 1.477 -0.0003 4.225V20.139C-0.0003 22.9 1.5037 24.363 4.2247 24.363ZM28.2737 22.941C28.4927 23.16 28.8207 23.119 29.0117 22.928C30.6797 21.178 32.8397 20.207 35.4097 20.207C37.9807 20.207 40.2087 21.109 41.8087 22.928C41.9867 23.133 42.3277 23.16 42.5467 22.941L43.5317 21.916C43.6957 21.752 43.7227 21.492 43.5447 21.301C41.7677 19.141 38.5957 17.705 35.4097 17.705C32.2247 17.705 29.0527 19.141 27.2617 21.301C27.0977 21.492 27.1247 21.752 27.2887 21.916ZM31.1997 25.867C31.4177 26.086 31.7187 26.086 31.9517 25.826C32.8127 24.896 34.0977 24.281 35.4097 24.268C36.7227 24.254 37.8987 25.006 38.8687 25.826C39.1287 26.059 39.4027 26.086 39.6207 25.867L40.7287 24.76C40.9067 24.582 40.9067 24.35 40.7557 24.144C39.6347 22.736 37.6117 21.793 35.4097 21.793C33.2087 21.793 31.2267 22.764 30.0647 24.144C29.9007 24.336 29.9137 24.582 30.0917 24.76ZM35.4097 29.709C35.6157 29.709 35.7927 29.627 36.0937 29.34L37.7887 27.686C37.9807 27.508 38.0217 27.303 37.8847 27.125C37.3377 26.346 36.3537 25.881 35.4097 25.881C34.4667 25.881 33.5097 26.359 32.9217 27.125C32.7987 27.289 32.8397 27.508 33.0317 27.686L34.7267 29.34C35.0277 29.627 35.2047 29.709 35.4097 29.709ZM10.5547 29.408H24.9517C25.7717 29.408 26.4277 28.725 26.4277 27.945C26.4277 27.152 25.7717 26.469 24.9517 26.469H10.5547C9.7347 26.469 9.0647 27.152 9.0647 27.945C9.0647 28.725 9.7347 29.408 10.5547 29.408Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.580040177723774 30.638671875"
          className={className}
        >
          <path
            d="              M4.5937 25.2519H27.3847L26.2637 24.1309C25.2927 23.1469 25.1977 21.6559 26.1407 20.5349C28.4097 17.8279 32.2657 16.0649 36.2027 16.0649V4.6079C36.2027 1.6539 34.5347 -0.0001 31.5957 -0.0001H4.5937C1.6677 -0.0001 -0.0003 1.6539 -0.0003 4.6079V20.6449C-0.0003 23.5979 1.6677 25.2519 4.5937 25.2519ZM28.7107 23.6799C28.9437 23.9119 29.2847 23.8709 29.4907 23.6519C31.2537 21.8479 33.4547 20.8629 36.0527 20.8629C38.6637 20.8629 40.9747 21.7519 42.6157 23.6519C42.8207 23.8709 43.1757 23.9119 43.4087 23.6799L44.4197 22.6269C44.6117 22.4359 44.6387 22.1619 44.4607 21.9429C42.6017 19.7289 39.3337 18.2379 36.0527 18.2379C32.7847 18.2379 29.5177 19.7289 27.6587 21.9429C27.4807 22.1619 27.5077 22.4359 27.6857 22.6269ZM31.7047 26.6739C31.9517 26.9199 32.2797 26.9199 32.5257 26.6329C33.4137 25.6619 34.7407 25.0609 36.0527 25.0469C37.3787 25.0329 38.5957 25.7849 39.5797 26.6329C39.8677 26.8929 40.1677 26.9199 40.4007 26.6739L41.5627 25.5389C41.7537 25.3479 41.7537 25.0739 41.5897 24.8689C40.3867 23.3929 38.2947 22.4219 36.0527 22.4219C33.8107 22.4219 31.7457 23.4199 30.5297 24.8689C30.3657 25.0739 30.3657 25.3479 30.5567 25.5389ZM36.0527 30.6389C36.2847 30.6389 36.4767 30.5569 36.7907 30.2419L38.5277 28.5469C38.7187 28.3559 38.7867 28.1369 38.6507 27.9319C38.0767 27.0979 37.0237 26.6329 36.0527 26.6329C35.0957 26.6329 34.0837 27.1249 33.4687 27.9319C33.3187 28.1229 33.3867 28.3559 33.5917 28.5469L35.3277 30.2419C35.6427 30.5569 35.8337 30.6389 36.0527 30.6389ZM10.7327 30.5019H25.4707C26.4007 30.5019 27.1527 29.7229 27.1527 28.8479C27.1527 27.9729 26.4007 27.1799 25.4707 27.1799H10.7327C9.7887 27.1799 9.0507 27.9729 9.0507 28.8479C9.0507 29.7229 9.7887 30.5019 10.7327 30.5019Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.720045969556104 26.919921875"
          className={className}
        >
          <path
            d="              M3.1997 22.1481H26.0317L24.8417 20.9591C24.1587 20.2891 24.1177 19.1951 24.7327 18.4431C26.6187 16.1051 29.9687 14.6831 33.3047 14.6831V3.1991C33.3047 1.0661 32.2107 0.0001 30.1057 0.0001H3.1997C1.0937 0.0001 -0.0003 1.0661 -0.0003 3.1991V18.9631C-0.0003 21.0961 1.0937 22.1481 3.1997 22.1481ZM26.8247 20.7541C27.0017 20.9181 27.2347 20.8911 27.3577 20.7541C28.8747 19.1681 30.8847 18.2381 33.3047 18.2381C35.7107 18.2381 37.7347 19.1681 39.2517 20.7541C39.3747 20.8911 39.6077 20.9181 39.7717 20.7541L40.6327 19.8651C40.7427 19.7421 40.7557 19.5781 40.6327 19.4411C39.0607 17.5001 36.2027 16.2691 33.3047 16.2691C30.4067 16.2691 27.5487 17.5001 25.9767 19.4411C25.8537 19.5781 25.8677 19.7421 25.9767 19.8651ZM29.5177 23.4331C29.6677 23.5981 29.8727 23.5981 30.0367 23.4201C30.8437 22.5861 32.0057 21.9841 33.3047 21.9711C34.6037 21.9571 35.6977 22.6541 36.5727 23.4201C36.7497 23.5701 36.9277 23.5981 37.0917 23.4331L38.0347 22.4901C38.1587 22.3671 38.1447 22.2171 38.0347 22.0661C37.0237 20.8361 35.2737 20.0291 33.3047 20.0291C31.3357 20.0291 29.6267 20.8911 28.5747 22.0661C28.4517 22.2031 28.4517 22.3671 28.5747 22.4901ZM33.3047 26.9201C33.4547 26.9201 33.6057 26.8511 33.8107 26.6601L35.3687 25.1561C35.4927 25.0331 35.4927 24.8831 35.4097 24.7731C34.9457 24.1721 34.1387 23.7621 33.3047 23.7621C32.4707 23.7621 31.6637 24.1721 31.1997 24.7731C31.1037 24.8831 31.1037 25.0331 31.2407 25.1561L32.7847 26.6601C32.9907 26.8511 33.1407 26.9201 33.3047 26.9201ZM9.9257 26.3181H23.3787C23.8437 26.3181 24.2267 25.9491 24.2267 25.4711C24.2267 24.9921 23.8437 24.6231 23.3787 24.6231H9.9257C9.4477 24.6231 9.0647 24.9921 9.0647 25.4711C9.0647 25.9491 9.4477 26.3181 9.9257 26.3181Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.557361629568284 28.57421875"
          className={className}
        >
          <path
            d="              M3.7737 23.2971H26.3457L25.4567 22.3941C24.6097 21.5601 24.5547 20.2341 25.3207 19.2911C27.3987 16.7341 31.0347 15.1351 34.6587 15.1351V3.7601C34.6587 1.2441 33.3597 0.0001 30.8847 0.0001H3.7737C1.2987 0.0001 -0.0003 1.2441 -0.0003 3.7601V19.5231C-0.0003 22.0391 1.2987 23.2971 3.7737 23.2971ZM27.7407 22.0391C27.9587 22.2441 28.2597 22.2171 28.4237 22.0391C29.9957 20.3571 32.1017 19.3871 34.6307 19.3871C37.1597 19.3871 39.2797 20.3301 40.8247 22.0391C40.9887 22.2171 41.2887 22.2441 41.5077 22.0391L42.4377 21.0551C42.5877 20.9181 42.6017 20.6851 42.4517 20.5211C40.7557 18.4301 37.6937 17.0621 34.6307 17.0621C31.5547 17.0621 28.4927 18.4301 26.7967 20.5211C26.6467 20.6851 26.6737 20.9181 26.8107 21.0551ZM30.5707 24.8691C30.7757 25.0741 31.0487 25.0741 31.2537 24.8551C32.0877 23.9671 33.3047 23.3511 34.6307 23.3241C35.9437 23.2971 37.0647 24.0761 37.9937 24.8551C38.2267 25.0471 38.4727 25.0741 38.6777 24.8691L39.7307 23.8161C39.8947 23.6521 39.8807 23.4611 39.7437 23.2561C38.7187 21.9161 36.7777 21.0271 34.6307 21.0271C32.4847 21.0271 30.5977 21.9841 29.5037 23.2561C29.3537 23.4471 29.3677 23.6521 29.5177 23.8161ZM34.6307 28.5741C34.8087 28.5741 34.9727 28.4921 35.2457 28.2321L36.9007 26.6331C37.0647 26.4691 37.0917 26.2911 36.9827 26.1411C36.4497 25.4161 35.5337 24.9651 34.6307 24.9651C33.7147 24.9651 32.8127 25.4301 32.2657 26.1411C32.1567 26.2771 32.1837 26.4691 32.3477 26.6331L34.0017 28.2321C34.2887 28.4921 34.4397 28.5741 34.6307 28.5741ZM10.3357 28.0681H24.3227C25.0057 28.0681 25.5667 27.5081 25.5667 26.8381C25.5667 26.1541 25.0057 25.5941 24.3227 25.5941H10.3357C9.6527 25.5941 9.0917 26.1541 9.0917 26.8381C9.0917 27.5081 9.6527 28.0681 10.3357 28.0681Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.93189654700437 27.9453125"
          className={className}
        >
          <path
            d="              M3.5137 22.695H26.0177L25.1977 21.875C24.4047 21.082 24.3497 19.797 25.0607 18.908C27.0837 16.393 30.6527 14.848 34.1797 14.848V3.514C34.1797 1.135 33.0037 0 30.6657 0H3.5137C1.1897 0 -0.0003 1.135 -0.0003 3.514V19.182C-0.0003 21.561 1.1897 22.695 3.5137 22.695ZM27.4527 21.533C27.6447 21.738 27.9317 21.711 28.0957 21.533C29.5997 19.906 31.6777 18.936 34.1797 18.936C36.6957 18.936 38.7597 19.906 40.2777 21.533C40.4277 21.711 40.7147 21.738 40.9197 21.533L41.8227 20.576C41.9587 20.453 41.9727 20.248 41.8357 20.084C40.1957 18.033 37.1877 16.721 34.1797 16.721C31.1857 16.721 28.1777 18.033 26.5237 20.084C26.4007 20.248 26.4137 20.453 26.5367 20.576ZM30.2287 24.309C30.4197 24.514 30.6797 24.5 30.8577 24.309C31.6777 23.447 32.8537 22.818 34.1797 22.791C35.5057 22.764 36.5997 23.557 37.5017 24.309C37.7207 24.473 37.9527 24.514 38.1447 24.309L39.1567 23.297C39.3067 23.133 39.3067 22.969 39.1697 22.764C38.1997 21.479 36.2987 20.604 34.1797 20.604C32.0607 20.604 30.2427 21.547 29.1897 22.764C29.0387 22.955 29.0527 23.133 29.2027 23.297ZM34.1797 27.945C34.3437 27.945 34.5077 27.863 34.7677 27.617L36.3947 26.045C36.5587 25.895 36.5587 25.717 36.4627 25.594C35.9437 24.91 35.0817 24.473 34.1797 24.473C33.2907 24.473 32.4297 24.91 31.8967 25.594C31.8007 25.717 31.8007 25.895 31.9647 26.045L33.5917 27.617C33.8657 27.863 34.0157 27.945 34.1797 27.945ZM10.2127 27.33H23.9667C24.5687 27.33 25.0747 26.838 25.0747 26.223C25.0747 25.607 24.5687 25.115 23.9667 25.115H10.2127C9.6117 25.115 9.1057 25.607 9.1057 26.223C9.1057 26.838 9.6117 27.33 10.2127 27.33Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.034436623587936 29.06640625"
          className={className}
        >
          <path
            d="              M3.9647 23.7482H26.5917L25.6487 22.8042C24.7737 21.9432 24.7047 20.5762 25.5117 19.5922C27.6447 16.9942 31.3227 15.3532 35.0277 15.3532V3.9652C35.0277 1.3402 33.6327 0.0002 31.0627 0.0002H3.9647C1.3807 0.0002 -0.0003 1.3402 -0.0003 3.9652V19.7832C-0.0003 22.4082 1.3807 23.7482 3.9647 23.7482ZM27.9727 22.4222C28.1917 22.6402 28.5057 22.5992 28.6697 22.4222C30.2967 20.7132 32.4157 19.7422 34.9587 19.7422C37.5157 19.7422 39.6757 20.6722 41.2477 22.4222C41.4257 22.6132 41.7407 22.6402 41.9457 22.4222L42.9027 21.4242C43.0667 21.2732 43.0797 21.0412 42.9297 20.8492C41.1937 18.7302 38.0767 17.3492 34.9587 17.3492C31.8417 17.3492 28.7387 18.7302 27.0017 20.8492C26.8517 21.0412 26.8657 21.2732 27.0157 21.4242ZM30.8437 25.2932C31.0627 25.5122 31.3357 25.5122 31.5547 25.2652C32.4027 24.3632 33.6467 23.7482 34.9587 23.7342C36.2847 23.7072 37.4197 24.4722 38.3767 25.2652C38.6097 25.4702 38.8687 25.5122 39.0877 25.2932L40.1547 24.2262C40.3317 24.0492 40.3317 23.8442 40.1817 23.6382C39.1157 22.2712 37.1327 21.3552 34.9587 21.3552C32.7987 21.3552 30.8707 22.3122 29.7497 23.6382C29.5857 23.8302 29.5997 24.0492 29.7637 24.2262ZM34.9587 29.0662C35.1507 29.0662 35.3277 28.9842 35.6017 28.7112L37.2837 27.0842C37.4607 26.9202 37.4887 26.7282 37.3787 26.5642C36.8317 25.8122 35.8887 25.3612 34.9587 25.3612C34.0427 25.3612 33.1137 25.8262 32.5527 26.5642C32.4297 26.7152 32.4707 26.9202 32.6487 27.0842L34.3167 28.7112C34.6037 28.9842 34.7677 29.0662 34.9587 29.0662ZM10.4317 28.6422H24.5957C25.3337 28.6422 25.9357 28.0272 25.9357 27.3162C25.9357 26.5922 25.3337 25.9632 24.5957 25.9632H10.4317C9.6797 25.9632 9.0917 26.5922 9.0917 27.3162C9.0917 28.0272 9.6797 28.6422 10.4317 28.6422Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.1121813810087 25.56640625"
          className={className}
        >
          <path
            d="              M2.7757 21.4372H26.0317L24.3637 19.7562C23.8297 19.2362 23.8027 18.4022 24.2947 17.8142C26.0177 15.7222 29.0527 14.4512 32.1287 14.4512V2.7752C32.1287 0.9712 31.1587 0.0002 29.3537 0.0002H2.7757C0.9847 0.0002 -0.0003 0.9712 -0.0003 2.7752V18.6622C-0.0003 20.4672 0.9847 21.4372 2.7757 21.4372ZM26.0037 19.7012C26.1267 19.8242 26.2907 19.8242 26.3867 19.7152C27.8907 18.1832 29.8457 17.3082 32.1427 17.3082C34.4257 17.3082 36.3807 18.1832 37.8847 19.7152C37.9807 19.8242 38.1447 19.8242 38.2677 19.7012L39.0337 18.9082C39.1287 18.8122 39.1427 18.7032 39.0467 18.5802C37.5707 16.8032 34.8907 15.6682 32.1427 15.6682C29.3807 15.6682 26.7147 16.8032 25.2387 18.5802C25.1427 18.7032 25.1427 18.8122 25.2387 18.9082ZM28.5747 22.2852C28.6837 22.3942 28.8207 22.3812 28.9437 22.2582C29.7497 21.4372 30.8707 20.8772 32.1427 20.8772C33.4137 20.8772 34.5077 21.4652 35.3277 22.2582C35.4647 22.3812 35.5877 22.3942 35.6977 22.2852L36.5317 21.4372C36.6267 21.3282 36.6137 21.2192 36.5177 21.1232C35.4787 20.0022 33.9197 19.2632 32.1427 19.2632C30.3517 19.2632 28.8207 20.0152 27.7537 21.1232C27.6717 21.2192 27.6587 21.3282 27.7407 21.4372ZM32.1427 25.5662C32.2797 25.5662 32.4297 25.5122 32.5527 25.3882L34.0017 23.9802C34.0837 23.8982 34.0837 23.7752 34.0157 23.6802C33.6187 23.2012 32.8947 22.8322 32.1427 22.8322C31.3907 22.8322 30.6527 23.2012 30.2697 23.6802C30.1877 23.7752 30.1877 23.8982 30.2837 23.9802L31.7327 25.3882C31.8557 25.5122 31.9927 25.5662 32.1427 25.5662ZM9.5297 24.9922H22.5997C22.8867 24.9922 23.1187 24.7732 23.1187 24.4722C23.1187 24.1852 22.8867 23.9672 22.5997 23.9672H9.5297C9.2427 23.9672 9.0097 24.1852 9.0097 24.4722C9.0097 24.7732 9.2427 24.9922 9.5297 24.9922Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.2880859375 24.8828125"
          className={className}
        >
          <path
            d="              M2.5707 21.0684H26.0317L24.1177 19.1404C23.6657 18.7034 23.6387 17.9924 24.0627 17.5004C25.7027 15.5314 28.5877 14.3284 31.5407 14.3284V2.5704C31.5407 0.9164 30.6117 0.0004 28.9707 0.0004H2.5707C0.9157 0.0004 -0.0003 0.9164 -0.0003 2.5704V18.4984C-0.0003 20.1524 0.9157 21.0684 2.5707 21.0684ZM25.5937 19.1684C25.6897 19.2774 25.8127 19.2774 25.8947 19.1814C27.3987 17.6914 29.3127 16.8304 31.5407 16.8304C33.7697 16.8304 35.6837 17.6914 37.1877 19.1814C37.2697 19.2774 37.3927 19.2774 37.5017 19.1684L38.2267 18.4294C38.3087 18.3344 38.3087 18.2524 38.2267 18.1424C36.8047 16.4474 34.2207 15.3674 31.5407 15.3674C28.8617 15.3674 26.2907 16.4474 24.8557 18.1424C24.7737 18.2524 24.7737 18.3344 24.8557 18.4294ZM28.0957 21.6974C28.1777 21.7794 28.2867 21.7654 28.3827 21.6564C29.1897 20.8634 30.2837 20.3164 31.5407 20.3164C32.7987 20.3164 33.8927 20.8494 34.6997 21.6564C34.7947 21.7654 34.9047 21.7794 34.9867 21.6974L35.7657 20.8904C35.8337 20.8084 35.8207 20.7124 35.7517 20.6444C34.6857 19.5784 33.2227 18.8674 31.5407 18.8674C29.8597 18.8674 28.3967 19.5784 27.3297 20.6444C27.2617 20.7124 27.2477 20.8084 27.3167 20.8904ZM31.5407 24.8824C31.6777 24.8824 31.8147 24.8284 31.9097 24.7464L33.2907 23.3924C33.3597 23.3244 33.3597 23.2144 33.2907 23.1324C32.9497 22.6954 32.2517 22.3534 31.5407 22.3534C30.8297 22.3534 30.1327 22.6954 29.7907 23.1324C29.7227 23.2144 29.7227 23.3244 29.7907 23.3924L31.1857 24.7464C31.2677 24.8284 31.4047 24.8824 31.5407 24.8824ZM9.3377 24.3084H22.2027C22.4087 24.3084 22.5587 24.1714 22.5587 23.9664C22.5587 23.7754 22.4087 23.6384 22.2027 23.6384H9.3377C9.1327 23.6384 8.9827 23.7754 8.9827 23.9664C8.9827 24.1714 9.1327 24.3084 9.3377 24.3084Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}