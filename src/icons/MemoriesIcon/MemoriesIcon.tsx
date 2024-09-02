import { IconProps } from "../../types"

export default function MemoriesIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.22265625 29.859375"
          className={className}
        >
          <path
            d="              M-0.0003 11.9081C-0.0003 12.3731 0.1507 12.8101 0.4507 13.1661L3.7737 17.0351C4.3617 17.7321 4.9627 18.0471 5.7417 18.0471C6.2757 18.0471 6.7817 17.8421 7.2187 17.5411L11.4027 14.5331C11.8807 14.1911 12.1677 13.6171 12.1677 13.0291C12.1677 12.1541 11.4977 11.3201 10.4317 11.3201C10.0077 11.3201 9.5977 11.4711 9.2697 11.8121L8.4907 12.5781C9.5567 8.1481 13.5217 4.8671 18.2797 4.8671C23.8437 4.8671 28.3417 9.3651 28.3557 14.9301C28.3557 20.4941 23.8437 24.9921 18.2797 24.9921C14.8747 24.9921 12.0997 23.2691 10.4457 21.2321C9.9117 20.5621 9.1737 20.2621 8.4767 20.2621C7.2597 20.2621 6.1387 21.2051 6.1387 22.5581C6.1387 23.2151 6.3847 23.9671 7.0687 24.7731C9.4337 27.5351 13.4807 29.8591 18.2797 29.8591C26.5097 29.8591 33.2227 23.1601 33.2227 14.9301C33.2227 6.6991 26.5097 0.0001 18.2797 0.0001C11.1287 0.0001 5.1137 5.0861 3.6917 11.8121L3.1857 11.0471C2.8437 10.5411 2.2967 10.2671 1.7497 10.2671C0.8337 10.2671 -0.0003 10.9101 -0.0003 11.9081ZM15.0667 19.4141C15.0667 20.0841 15.8317 20.4391 16.4477 20.0981L24.0487 15.7231C24.6097 15.3941 24.5957 14.5331 24.0487 14.2051L16.4477 9.8031C15.8317 9.4471 15.0667 9.8301 15.0667 10.4861Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.142578125 28.888671875"
          className={className}
        >
          <path
            d="              M-0.0003 11.3886C-0.0003 11.7576 0.1097 12.0996 0.3557 12.3866L3.4457 16.0916C3.9507 16.7066 4.4297 16.9666 5.0997 16.9666C5.5507 16.9666 5.9337 16.8166 6.3167 16.5426L10.1987 13.7266C10.5957 13.4396 10.8147 12.9886 10.8147 12.5096C10.8147 11.7576 10.2267 11.1156 9.4067 11.1156C9.0647 11.1156 8.7497 11.2246 8.4767 11.4706L7.0407 12.6736C7.8617 7.5196 12.2907 3.5956 17.6917 3.5956C23.7067 3.5956 28.5467 8.4356 28.5467 14.4376C28.5607 20.4536 23.7067 25.2926 17.7047 25.2926C13.8637 25.2926 10.9647 23.2966 9.3927 21.4106C8.9827 20.9046 8.4217 20.6716 7.9157 20.6716C7.0137 20.6716 6.2067 21.3696 6.2067 22.3536C6.2067 22.8456 6.3847 23.3926 6.8767 23.9666C8.8047 26.2086 12.6877 28.8886 17.7047 28.8886C25.6347 28.8886 32.1427 22.3676 32.1427 14.4376C32.1427 6.5216 25.6207 -0.0004 17.6917 -0.0004C10.6367 -0.0004 4.6897 5.1956 3.5137 11.9216L2.6247 10.6776C2.3377 10.2676 1.9137 10.0356 1.4357 10.0356C0.6697 10.0356 -0.0003 10.5686 -0.0003 11.3886ZM14.3827 18.9356C14.3827 19.5786 15.1077 19.8926 15.7087 19.5376L23.1737 15.1896C23.7207 14.8746 23.7067 14.0546 23.1737 13.7406L15.7087 9.3786C15.1207 9.0376 14.3827 9.3516 14.3827 9.9946Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.716796875 29.408203125"
          className={className}
        >
          <path
            d="              M-0.0003 11.6624C-0.0003 12.0864 0.1367 12.4824 0.4097 12.7974L3.6227 16.5974C4.1697 17.2544 4.7167 17.5414 5.4417 17.5414C5.9337 17.5414 6.3847 17.3634 6.7947 17.0764L10.8277 14.1504C11.2657 13.8364 11.5257 13.3164 11.5257 12.7974C11.5257 11.9764 10.8967 11.2244 9.9397 11.2244C9.5567 11.2244 9.1877 11.3614 8.9007 11.6624L7.8067 12.6324C8.7497 7.8614 12.9477 4.2794 18.0057 4.2794C23.7757 4.2794 28.4377 8.9274 28.4377 14.7114C28.4507 20.4804 23.7887 25.1424 18.0057 25.1424C14.3967 25.1424 11.5667 23.2834 9.9527 21.3284C9.4747 20.7264 8.8187 20.4664 8.2167 20.4664C7.1507 20.4664 6.1657 21.2874 6.1657 22.4764C6.1657 23.0374 6.3847 23.7074 6.9867 24.4044C9.1467 26.9204 13.0977 29.4084 18.0057 29.4084C26.0997 29.4084 32.7167 22.7914 32.7167 14.7114C32.7167 6.6304 26.0857 0.0004 18.0057 0.0004C10.8967 0.0004 4.9217 5.1404 3.6097 11.8804L2.9117 10.8824C2.5977 10.4184 2.1187 10.1584 1.5997 10.1584C0.7517 10.1584 -0.0003 10.7594 -0.0003 11.6624ZM14.7387 19.1954C14.7387 19.8514 15.4907 20.1934 16.0917 19.8384L23.6387 15.4764C24.1857 15.1484 24.1857 14.3144 23.6387 13.9864L16.0917 9.6114C15.5037 9.2554 14.7387 9.6114 14.7387 10.2544Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.666015625 27.42578125"
          className={className}
        >
          <path
            d="              M-0.0003 10.404C-0.0003 10.623 0.0687 10.828 0.2047 10.992L3.1987 14.643C3.4997 15.025 3.7737 15.176 4.1837 15.176C4.4437 15.176 4.6487 15.094 4.9077 14.902L8.5317 12.086C8.7637 11.922 8.9007 11.676 8.9007 11.389C8.9007 10.896 8.5177 10.541 8.0667 10.541C7.8617 10.541 7.6837 10.596 7.5197 10.732L5.0587 12.715C5.5507 6.576 10.6637 1.764 16.9397 1.764C23.5567 1.764 28.8747 7.096 28.8887 13.713C28.9027 20.316 23.5567 25.648 16.9527 25.648C12.6877 25.648 9.5297 23.434 7.8747 21.479C7.6427 21.205 7.3687 21.096 7.1227 21.096C6.6857 21.096 6.2887 21.438 6.2887 21.916C6.2887 22.162 6.3847 22.422 6.6037 22.695C8.3537 24.719 11.9767 27.426 16.9527 27.426C24.4727 27.426 30.6657 21.219 30.6657 13.713C30.6657 6.193 24.4457 0 16.9397 0C9.9257 0 4.0737 5.4 3.3357 12.223L1.5857 9.98C1.4217 9.734 1.1757 9.584 0.8617 9.584C0.3827 9.584 -0.0003 9.926 -0.0003 10.404ZM13.5897 18.361C13.5897 18.922 14.2187 19.182 14.7657 18.854L22.2717 14.383C22.7777 14.082 22.7637 13.385 22.2717 13.084L14.7657 8.586C14.2457 8.285 13.5897 8.531 13.5897 9.092Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.458984375 28.24609375"
          className={className}
        >
          <path
            d="              M-0.0003 11.0471C-0.0003 11.3481 0.0957 11.6481 0.2867 11.8811L3.2407 15.4761C3.7047 16.0511 4.1017 16.2691 4.6897 16.2691C5.0727 16.2691 5.4007 16.1461 5.7417 15.9001L9.4337 13.1931C9.7617 12.9471 9.9527 12.5781 9.9527 12.1811C9.9527 11.4981 9.4197 10.9651 8.7497 10.9651C8.4627 10.9651 8.2027 11.0471 7.9707 11.2381L6.0977 12.7281C6.7677 7.1091 11.5117 2.7891 17.3227 2.7891C23.6117 2.7891 28.6697 7.8341 28.6837 14.1231C28.6837 20.4121 23.6247 25.4711 17.3357 25.4711C13.2347 25.4711 10.2407 23.3101 8.7227 21.5061C8.3807 21.1091 7.9567 20.9311 7.5467 20.9311C6.8637 20.9311 6.2477 21.4651 6.2477 22.2301C6.2477 22.5991 6.3847 23.0231 6.7537 23.4471C8.4077 25.3611 12.1817 28.2461 17.3357 28.2461C25.0737 28.2461 31.4587 21.8611 31.4587 14.1231C31.4587 6.3981 25.0607 0.0001 17.3227 0.0001C10.3227 0.0001 4.4157 5.2501 3.4047 11.9901L2.2697 10.4311C2.0237 10.0761 1.6677 9.8711 1.2437 9.8711C0.5607 9.8711 -0.0003 10.3491 -0.0003 11.0471ZM13.9317 18.6211C13.9317 19.2361 14.6427 19.5371 15.2437 19.1811L22.6137 14.8481C23.1467 14.5191 23.1467 13.7541 22.6137 13.4391L15.2437 9.0921C14.6697 8.7641 13.9317 9.0371 13.9317 9.6521Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.076171875 27.890625"
          className={className}
        >
          <path
            d="              M-0.0003 10.8554C-0.0003 11.1284 0.0817 11.3884 0.2457 11.5934L3.1307 15.1344C3.5547 15.6814 3.9097 15.8734 4.4567 15.8734C4.8127 15.8734 5.0857 15.7774 5.4277 15.5314L8.9957 12.8924C9.2967 12.6734 9.4607 12.3454 9.4607 11.9904C9.4607 11.3474 8.9547 10.8824 8.3807 10.8824C8.1207 10.8824 7.8887 10.9514 7.6837 11.1154L5.5777 12.7694C6.1527 6.8774 11.0607 2.3244 17.1167 2.3244C23.5707 2.3244 28.7387 7.4924 28.7517 13.9454C28.7657 20.3984 23.5837 25.5664 17.1307 25.5664C12.8657 25.5664 9.8297 23.3104 8.3397 21.5744C8.0527 21.2184 7.6837 21.0824 7.3557 21.0824C6.7817 21.0824 6.2617 21.5194 6.2617 22.1484C6.2617 22.4624 6.3847 22.8044 6.6857 23.1604C8.1897 24.8824 11.8947 27.8904 17.1307 27.8904C24.7597 27.8904 31.0757 21.5604 31.0757 13.9454C31.0757 6.3164 24.7327 0.0004 17.1167 0.0004C10.1447 0.0004 4.2657 5.2914 3.3357 12.0314L2.0647 10.2954C1.8457 9.9804 1.5317 9.7754 1.1207 9.7754C0.4917 9.7754 -0.0003 10.2264 -0.0003 10.8554ZM13.6857 18.4294C13.6857 19.0584 14.3827 19.3324 14.9707 18.9764L22.2987 14.6564C22.8317 14.3284 22.8187 13.5764 22.2987 13.2754L14.9707 8.9274C14.4237 8.5994 13.6857 8.8594 13.6857 9.4744Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.759765625 28.51953125"
          className={className}
        >
          <path
            d="              M-0.0003 11.1969C-0.0003 11.5259 0.0957 11.8399 0.3147 12.0999L3.3357 15.7499C3.8147 16.3379 4.2517 16.5699 4.8667 16.5699C5.2777 16.5699 5.6327 16.4339 6.0017 16.1739L9.7617 13.4259C10.1167 13.1659 10.3227 12.7559 10.3227 12.3179C10.3227 11.6079 9.7617 11.0329 9.0367 11.0329C8.7227 11.0329 8.4357 11.1149 8.1897 11.3339L6.5077 12.7149C7.2327 7.2869 11.8397 3.1309 17.4867 3.1309C23.6527 3.1309 28.6157 8.0939 28.6287 14.2599C28.6287 20.4259 23.6657 25.3889 17.4997 25.3889C13.5077 25.3889 10.5547 23.2969 9.0097 21.4649C8.6407 21.0139 8.1617 20.8219 7.7107 20.8219C6.9317 20.8219 6.2207 21.4239 6.2207 22.2849C6.2207 22.7089 6.3847 23.1879 6.8087 23.6799C8.5857 25.7309 12.4007 28.5199 17.4997 28.5199C25.3207 28.5199 31.7597 22.0799 31.7597 14.2599C31.7597 6.4529 25.2927 -0.0001 17.4867 -0.0001C10.4587 -0.0001 4.5387 5.2359 3.4457 11.9629L2.4197 10.5409C2.1597 10.1579 1.7777 9.9399 1.3257 9.9399C0.6017 9.9399 -0.0003 10.4449 -0.0003 11.1969ZM14.1227 18.7579C14.1227 19.3869 14.8337 19.6879 15.4487 19.3319L22.8597 14.9979C23.3927 14.6699 23.3927 13.8909 22.8597 13.5759L15.4487 9.2149C14.8617 8.8729 14.1227 9.1739 14.1227 9.8029Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.119140625 26.810546875"
          className={className}
        >
          <path
            d="              M-0.0003 9.8162C-0.0003 9.9672 0.0547 10.0902 0.1507 10.1992L3.2947 13.9722C3.4317 14.1642 3.5817 14.2462 3.8007 14.2462C3.9647 14.2462 4.0737 14.1912 4.2247 14.0822L7.9297 11.0332C8.0667 10.9242 8.1487 10.7872 8.1487 10.5952C8.1487 10.3082 7.9297 10.0902 7.6427 10.0902C7.5057 10.0902 7.4097 10.1312 7.2867 10.2262L4.3747 12.6462C4.7577 6.1792 10.1307 1.0392 16.7067 1.0392C23.5297 1.0392 29.0667 6.5902 29.0797 13.4122C29.0797 20.2342 23.5297 25.7712 16.7067 25.7712C12.4417 25.7712 9.1187 23.6112 7.2597 21.3832C7.1097 21.1912 6.9587 21.1372 6.8087 21.1372C6.5487 21.1372 6.3167 21.3422 6.3167 21.6292C6.3167 21.7792 6.3707 21.9292 6.5077 22.0942C8.5857 24.5002 12.0997 26.8102 16.7067 26.8102C24.0757 26.8102 30.1187 20.7672 30.1187 13.4122C30.1187 6.0432 24.0627 0.0002 16.7067 0.0002C9.6387 0.0002 3.8007 5.5512 3.3497 12.4962L0.9567 9.5702C0.8477 9.4202 0.7107 9.3242 0.5197 9.3242C0.2327 9.3242 -0.0003 9.5292 -0.0003 9.8162ZM13.4667 18.2652C13.4667 18.7582 14.0277 18.9902 14.4917 18.7172L22.2307 14.0412C22.7087 13.7542 22.6957 13.1382 22.2307 12.8512L14.4917 8.1352C14.0277 7.8612 13.4667 8.0942 13.4667 8.5862Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.83203125 26.49609375"
          className={className}
        >
          <path
            d="              M-0.0003 9.5021C-0.0003 9.6251 0.0547 9.7071 0.1227 9.7891L3.3357 13.6311C3.4047 13.7131 3.4867 13.7671 3.6097 13.7671C3.7187 13.7671 3.7737 13.7261 3.8827 13.6441L7.6157 10.4731C7.6977 10.4041 7.7657 10.3221 7.7657 10.1851C7.7657 10.0081 7.6427 9.8571 7.4377 9.8571C7.3277 9.8571 7.2597 9.8851 7.1777 9.9531L4.0197 12.6051C4.3477 5.9611 9.8577 0.6701 16.5837 0.6701C23.5297 0.6701 29.1617 6.3031 29.1617 13.2481C29.1617 20.1801 23.5297 25.8261 16.5837 25.8261C12.3047 25.8261 8.9137 23.6801 6.9317 21.3141C6.8357 21.1781 6.7537 21.1501 6.6577 21.1501C6.4807 21.1501 6.3297 21.2871 6.3297 21.4651C6.3297 21.5601 6.3707 21.6701 6.4527 21.7651C8.6957 24.3771 12.1677 26.4961 16.5837 26.4961C23.8707 26.4961 29.8317 20.5351 29.8317 13.2481C29.8317 5.9611 23.8707 0.0001 16.5837 0.0001C9.5017 0.0001 3.6777 5.6191 3.3497 12.6191L0.6427 9.3511C0.5467 9.2561 0.4647 9.1871 0.3277 9.1871C0.1507 9.1871 -0.0003 9.3101 -0.0003 9.5021ZM13.3987 18.2111C13.3987 18.6621 13.9177 18.8811 14.3557 18.6211L22.2167 13.8491C22.6677 13.5761 22.6677 13.0021 22.2167 12.7281L14.3557 7.9021C13.9177 7.6421 13.3987 7.8611 13.3987 8.3121Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}