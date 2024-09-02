import { IconProps } from "../../types"

export default function HouseCircleIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM7.0137 14.3011C7.0137 14.8891 7.4097 15.2851 8.0527 15.2851C8.3127 15.2851 8.5997 15.1621 8.8317 14.9571L14.5197 10.1991C14.7797 9.9531 15.1077 9.9671 15.3807 10.1991L21.0547 14.9571C21.2867 15.1621 21.5737 15.2851 21.8337 15.2851C22.4627 15.2851 22.8727 14.9021 22.8727 14.3011C22.8727 14.0141 22.7227 13.6721 22.4487 13.4531L20.7537 12.0311V9.2421C20.7537 8.9411 20.5757 8.7641 20.2757 8.7641H18.7437C18.4437 8.7641 18.2517 8.9411 18.2517 9.2421V9.9261L16.2967 8.2991C15.4907 7.6151 14.4097 7.6151 13.6037 8.2991L7.4377 13.4671C7.1637 13.6851 7.0137 14.0141 7.0137 14.3011ZM9.2287 19.7971C9.2287 20.7671 9.9257 21.4101 10.9917 21.4101H18.8947C19.9477 21.4101 20.6577 20.7671 20.6577 19.7971V16.0641L15.3537 11.6211C15.0937 11.4021 14.7927 11.4021 14.5327 11.6211L9.2287 16.0641ZM16.5977 19.6461H13.2757V16.3511C13.2757 16.0371 13.4807 15.8591 13.7677 15.8591H16.1187C16.4197 15.8591 16.5977 16.0371 16.5977 16.3511Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM6.1527 13.5766C6.1527 14.0276 6.4807 14.3696 7.0137 14.3696C7.2457 14.3696 7.4647 14.2596 7.6697 14.0816L14.0687 8.7226C14.3147 8.5036 14.5737 8.5176 14.8207 8.7226L21.2187 14.0816C21.4237 14.2596 21.6427 14.3696 21.8747 14.3696C22.3667 14.3696 22.7227 14.0686 22.7227 13.5896C22.7227 13.3166 22.6137 13.0836 22.3947 12.8926L20.5217 11.3206V8.5176C20.5217 8.2036 20.3297 8.0116 20.0297 8.0116H18.8807C18.5667 8.0116 18.3617 8.2036 18.3617 8.5176V9.5156L15.6137 7.2046C14.9157 6.6036 13.9867 6.6036 13.2887 7.2046L6.4807 12.9066C6.2757 13.0836 6.1527 13.3436 6.1527 13.5766ZM8.4077 19.5376C8.4077 20.5216 9.0507 21.1366 10.1037 21.1366H18.7847C19.8237 21.1366 20.4807 20.5216 20.4807 19.5376V14.8206L14.8617 10.1176C14.6017 9.8846 14.2867 9.8846 14.0137 10.1176L8.4077 14.8206ZM16.2007 19.5646H12.6877V15.6266C12.6877 15.3126 12.8927 15.1076 13.2067 15.1076H15.6817C16.0097 15.1076 16.2007 15.3126 16.2007 15.6266Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM6.6037 13.9594C6.6037 14.4924 6.9727 14.8614 7.5607 14.8614C7.8067 14.8614 8.0667 14.7384 8.2847 14.5474L14.3007 9.5024C14.5607 9.2834 14.8617 9.2834 15.1207 9.5024L21.1227 14.5474C21.3557 14.7384 21.6157 14.8614 21.8617 14.8614C22.4217 14.8614 22.8047 14.5054 22.8047 13.9724C22.8047 13.6994 22.6677 13.3984 22.4357 13.1934L20.6447 11.7034V8.9004C20.6447 8.5994 20.4667 8.4084 20.1527 8.4084H18.8127C18.5117 8.4084 18.3067 8.5994 18.3067 8.9004V9.7344L15.9687 7.7794C15.2167 7.1504 14.2047 7.1504 13.4527 7.7794L6.9867 13.2074C6.7407 13.4124 6.6037 13.6994 6.6037 13.9594ZM8.8457 19.6734C8.8457 20.6584 9.5157 21.2874 10.5687 21.2874H18.8397C19.8927 21.2874 20.5757 20.6584 20.5757 19.6734V15.4764L15.1207 10.9234C14.8617 10.6914 14.5467 10.6914 14.2867 10.9234L8.8457 15.4764ZM16.4067 19.6194H12.9887V16.0234C12.9887 15.6954 13.2067 15.5044 13.5077 15.5044H15.9137C16.2287 15.5044 16.4067 15.6954 16.4067 16.0234Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM5.3867 12.469C5.3867 12.742 5.6057 12.988 5.9477 12.988C6.1117 12.988 6.2477 12.906 6.3707 12.783L13.2887 7C13.5897 6.74 13.8497 6.754 14.1507 7L21.0407 12.783C21.1917 12.906 21.3147 12.988 21.4787 12.988C21.7797 12.988 22.0257 12.783 22.0257 12.496C22.0257 12.291 21.9567 12.154 21.8207 12.031L19.9067 10.418V7.629C19.9067 7.369 19.7417 7.205 19.4827 7.205H18.8127C18.5667 7.205 18.3887 7.369 18.3887 7.629V9.146L14.7387 6.084C14.1227 5.551 13.3167 5.551 12.7007 6.084L5.6057 12.031C5.4547 12.154 5.3867 12.305 5.3867 12.469ZM7.5197 18.949C7.5197 19.865 8.0667 20.398 8.9957 20.398H18.4437C19.3597 20.398 19.9067 19.865 19.9067 18.949V12.852L14.1507 8.012C13.8637 7.779 13.5627 7.779 13.2757 8.012L7.5197 12.838ZM15.5317 19.277H11.8947V14.684C11.8947 14.383 12.0997 14.191 12.4007 14.191H15.0257C15.3397 14.191 15.5317 14.383 15.5317 14.684Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM5.6057 13.0981C5.6057 13.4671 5.8927 13.7811 6.3437 13.7811C6.5627 13.7811 6.7537 13.6581 6.9177 13.5081L13.7817 7.7651C14.0137 7.5601 14.2457 7.5881 14.4647 7.7651L21.3147 13.5081C21.5057 13.6581 21.6977 13.7811 21.9027 13.7811C22.3127 13.7811 22.6267 13.5211 22.6267 13.1251C22.6267 12.8791 22.5447 12.6871 22.3667 12.5371L20.3847 10.8551V8.0391C20.3847 7.7381 20.1797 7.5191 19.8657 7.5191H18.9627C18.6487 7.5191 18.4437 7.7381 18.4437 8.0391V9.2421L15.1757 6.4941C14.5467 5.9611 13.7267 5.9611 13.0837 6.4941L5.8787 12.5371C5.7007 12.6871 5.6057 12.8921 5.6057 13.0981ZM7.8887 19.3591C7.8887 20.3441 8.5037 20.9451 9.5297 20.9451H18.7167C19.7417 20.9451 20.3577 20.3441 20.3577 19.3591V14.0141L14.5467 9.1331C14.2737 8.9001 13.9587 8.9141 13.6857 9.1331L7.8887 14.0141ZM15.9417 19.5101H12.3047V15.1621C12.3047 14.8341 12.5237 14.6291 12.8517 14.6291H15.4077C15.7497 14.6291 15.9417 14.8341 15.9417 15.1621Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM5.3047 12.8244C5.3047 13.1384 5.5507 13.4534 5.9607 13.4534C6.1797 13.4534 6.3437 13.3304 6.4937 13.1934L13.6167 7.2324C13.8497 7.0274 14.0547 7.0544 14.2737 7.2324L21.3827 13.1934C21.5607 13.3304 21.7107 13.4534 21.9157 13.4534C22.2717 13.4534 22.5727 13.2074 22.5727 12.8514C22.5727 12.6194 22.5037 12.4684 22.3397 12.3184L20.2887 10.5954V7.7654C20.2887 7.4644 20.0977 7.2464 19.7827 7.2464H19.0037C18.7027 7.2464 18.4847 7.4644 18.4847 7.7654V9.0784L14.9297 6.0974C14.3277 5.5914 13.5627 5.5914 12.9747 6.0974L5.5367 12.3184C5.3867 12.4684 5.3047 12.6464 5.3047 12.8244ZM7.5877 19.2634C7.5877 20.2484 8.1897 20.8364 9.2147 20.8364H18.6757C19.7007 20.8364 20.2887 20.2484 20.2887 19.2634V13.5624L14.3687 8.5864C14.0957 8.3534 13.7817 8.3674 13.5077 8.5864L7.5877 13.5484ZM15.8047 19.4684H12.0857V14.9024C12.0857 14.5744 12.3047 14.3554 12.6467 14.3554H15.2437C15.5997 14.3554 15.8047 14.5744 15.8047 14.9024Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.51953125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM5.8517 13.3029C5.8517 13.6989 6.1527 14.0409 6.6307 14.0409C6.8497 14.0409 7.0547 13.9179 7.2327 13.7539L13.9047 8.1759C14.1367 7.9709 14.3827 7.9849 14.6287 8.1759L21.2737 13.7539C21.4647 13.9179 21.6697 14.0409 21.8887 14.0409C22.3397 14.0409 22.6677 13.7539 22.6677 13.3169C22.6677 13.0699 22.5727 12.8519 22.3807 12.6879L20.4397 11.0609V8.2439C20.4397 7.9429 20.2477 7.7379 19.9337 7.7379H18.9217C18.6207 7.7379 18.4157 7.9429 18.4157 8.2439V9.3519L15.3667 6.7949C14.6977 6.2349 13.8357 6.2349 13.1797 6.7949L6.1387 12.7009C5.9477 12.8649 5.8517 13.0839 5.8517 13.3029ZM8.1077 19.4279C8.1077 20.4259 8.7367 21.0269 9.7757 21.0269H18.7437C19.7697 21.0269 20.4117 20.4259 20.4117 19.4279V14.3559L14.6837 9.5569C14.4097 9.3239 14.0957 9.3379 13.8357 9.5569L8.1077 14.3559ZM16.0507 19.5369H12.4687V15.3669C12.4687 15.0389 12.6877 14.8339 13.0017 14.8339H15.5177C15.8597 14.8339 16.0507 15.0389 16.0507 15.3669Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM5.4957 12.0042C5.4957 12.2222 5.6737 12.4002 5.9197 12.4002C6.0297 12.4002 6.1117 12.3452 6.2067 12.2632L12.8377 6.7132C13.2617 6.3442 13.5757 6.3572 13.9997 6.7132L20.5897 12.2632C20.7127 12.3452 20.7947 12.4002 20.8907 12.4002C21.1097 12.4002 21.3007 12.2362 21.3007 12.0042C21.3007 11.8532 21.2457 11.7442 21.1227 11.6482L19.4007 10.1992V7.4512C19.4007 7.2602 19.2777 7.1372 19.0997 7.1372H18.5527C18.3747 7.1372 18.2517 7.2602 18.2517 7.4512V9.2282L14.4917 6.0702C13.8497 5.5232 13.0017 5.5232 12.3317 6.0702L5.6737 11.6482C5.5507 11.7442 5.4957 11.8532 5.4957 12.0042ZM7.4237 18.5532C7.4237 19.3592 7.9027 19.8242 8.7087 19.8242H18.1427C18.9357 19.8242 19.4007 19.3592 19.4007 18.5532V11.9222L13.8497 7.2732C13.5487 7.0132 13.2617 7.0132 12.9607 7.2732L7.4237 11.9082ZM15.1757 19.0452H11.6347V14.3962C11.6347 14.1372 11.8257 13.9722 12.0727 13.9722H14.7387C14.9977 13.9722 15.1757 14.1372 15.1757 14.3962Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM5.5507 11.7581C5.5507 11.9491 5.7147 12.0861 5.8927 12.0861C5.9887 12.0861 6.0567 12.0451 6.1247 11.9761L12.6187 6.5491C13.0977 6.1391 13.4397 6.1391 13.9177 6.5491L20.3707 11.9761C20.4667 12.0451 20.5217 12.0861 20.5897 12.0861C20.7817 12.0861 20.9317 11.9491 20.9317 11.7581C20.9317 11.6211 20.8767 11.5251 20.7677 11.4431L19.1407 10.0761V7.3551C19.1407 7.2051 19.0317 7.0961 18.8947 7.0961H18.4157C18.2797 7.0961 18.1837 7.2051 18.1837 7.3551V9.2561L14.3687 6.0561C13.6987 5.4961 12.8237 5.4961 12.1547 6.0561L5.7147 11.4431C5.6057 11.5251 5.5507 11.6211 5.5507 11.7581ZM7.3827 18.3341C7.3827 19.0861 7.8067 19.5231 8.5587 19.5231H17.9787C18.7027 19.5231 19.1407 19.0861 19.1407 18.3341V11.4431L13.6987 6.8771C13.3847 6.6171 13.1117 6.6171 12.7967 6.8771L7.3827 11.4161ZM14.9977 18.9081H11.5117V14.2461C11.5117 14.0001 11.6757 13.8631 11.9077 13.8631H14.6017C14.8207 13.8631 14.9977 14.0001 14.9977 14.2461Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
