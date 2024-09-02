import { IconProps } from "../../types"

export default function CpuFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.2578125 29.2578125"
          className={className}
        >
          <path
            d="              M-0.0003 19.3043C-0.0003 20.1793 0.7107 20.9043 1.5997 20.9043H2.7757V24.9373C2.7757 25.8673 3.3907 26.4823 4.3207 26.4823H8.3537V27.6723C8.3537 28.5473 9.0647 29.2573 9.9397 29.2573C10.8277 29.2573 11.5387 28.5473 11.5387 27.6723V26.4823H13.0297V27.6723C13.0297 28.5473 13.7537 29.2573 14.6287 29.2573C15.5177 29.2573 16.2287 28.5473 16.2287 27.6723V26.4823H17.7187V27.6723C17.7187 28.5473 18.4437 29.2573 19.3187 29.2573C20.2067 29.2573 20.9177 28.5473 20.9177 27.6723V26.4823H24.9517C25.8677 26.4823 26.4827 25.8673 26.4827 24.9373V20.9043H27.6717C28.5467 20.9043 29.2577 20.1793 29.2577 19.3043C29.2577 18.4163 28.5467 17.7053 27.6717 17.7053H26.4827V16.2153H27.6717C28.5467 16.2153 29.2577 15.4903 29.2577 14.6153C29.2577 13.7263 28.5467 13.0153 27.6717 13.0153H26.4827V11.5253H27.6717C28.5467 11.5253 29.2577 10.8003 29.2577 9.9253C29.2577 9.0503 28.5467 8.3263 27.6717 8.3263H26.4827V4.3203C26.4827 3.3903 25.8677 2.7753 24.9517 2.7753H20.9177V1.5993C20.9177 0.7113 20.2067 0.0003 19.3187 0.0003C18.4437 0.0003 17.7187 0.7113 17.7187 1.5993V2.7753H16.2287V1.5993C16.2287 0.7113 15.5177 0.0003 14.6287 0.0003C13.7537 0.0003 13.0297 0.7113 13.0297 1.5993V2.7753H11.5387V1.5993C11.5387 0.7113 10.8277 0.0003 9.9397 0.0003C9.0647 0.0003 8.3537 0.7113 8.3537 1.5993V2.7753H4.3207C3.3907 2.7753 2.7757 3.3903 2.7757 4.3203V8.3263H1.5997C0.7107 8.3263 -0.0003 9.0503 -0.0003 9.9253C-0.0003 10.8143 0.7107 11.5253 1.5997 11.5253H2.7757V13.0153H1.5997C0.7107 13.0153 -0.0003 13.7403 -0.0003 14.6153C-0.0003 15.4903 0.7107 16.2153 1.5997 16.2153H2.7757V17.7053H1.5997C0.7107 17.7053 -0.0003 18.4163 -0.0003 19.3043ZM10.0627 20.2073C9.4337 20.2073 9.0367 19.7973 9.0367 19.1683V10.0623C9.0367 9.4333 9.4337 9.0233 10.0627 9.0233H19.2227C19.8377 9.0233 20.2477 9.4333 20.2477 10.0623V19.1683C20.2477 19.7973 19.8377 20.2073 19.2227 20.2073ZM12.2227 16.7613C12.2227 16.9123 12.3317 17.0073 12.4827 17.0073H16.8027C16.9527 17.0073 17.0627 16.9123 17.0627 16.7613V12.4683C17.0627 12.3183 16.9527 12.2093 16.8027 12.2093H12.4827C12.3317 12.2093 12.2227 12.3183 12.2227 12.4683Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.3828125 28.3828125"
          className={className}
        >
          <path
            d="              M-0.0003 18.7988C-0.0003 19.5648 0.5747 20.1388 1.3537 20.1388H2.6387V24.4318C2.6387 25.2248 3.1587 25.7438 3.9517 25.7438H8.2307V27.0428C8.2307 27.8088 8.8187 28.3828 9.5837 28.3828C10.3497 28.3828 10.9377 27.8088 10.9377 27.0428V25.7438H12.8517V27.0428C12.8517 27.8088 13.4257 28.3828 14.1917 28.3828C14.9567 28.3828 15.5447 27.8088 15.5447 27.0428V25.7438H17.4587V27.0428C17.4587 27.8088 18.0337 28.3828 18.7987 28.3828C19.5777 28.3828 20.1527 27.8088 20.1527 27.0428V25.7438H24.4317C25.2247 25.7438 25.7437 25.2248 25.7437 24.4318V20.1388H27.0427C27.8087 20.1388 28.3827 19.5508 28.3827 18.7848C28.3827 18.0198 27.8087 17.4318 27.0427 17.4318H25.7437V15.5178H27.0427C27.8087 15.5178 28.3827 14.9438 28.3827 14.1778C28.3827 13.4118 27.8087 12.8238 27.0427 12.8238H25.7437V10.9098H27.0427C27.8087 10.9098 28.3827 10.3358 28.3827 9.5698C28.3827 8.7908 27.8087 8.2168 27.0427 8.2168H25.7437V3.9508C25.7437 3.1718 25.2247 2.6388 24.4317 2.6388H20.1527V1.3538C20.1527 0.5878 19.5777 -0.0002 18.7987 -0.0002C18.0337 -0.0002 17.4587 0.5878 17.4587 1.3538V2.6388H15.5447V1.3538C15.5447 0.5878 14.9567 -0.0002 14.1917 -0.0002C13.4257 -0.0002 12.8517 0.5878 12.8517 1.3538V2.6388H10.9377V1.3538C10.9377 0.5878 10.3497 -0.0002 9.5837 -0.0002C8.8187 -0.0002 8.2307 0.5878 8.2307 1.3538V2.6388H3.9517C3.1587 2.6388 2.6387 3.1718 2.6387 3.9508V8.2308H1.3537C0.5747 8.2308 -0.0003 8.8048 -0.0003 9.5698C-0.0003 10.3358 0.5747 10.9238 1.3537 10.9238H2.6387V12.8378H1.3537C0.5747 12.8378 -0.0003 13.4118 -0.0003 14.1778C-0.0003 14.9568 0.5747 15.5308 1.3537 15.5308H2.6387V17.4448H1.3537C0.5747 17.4448 -0.0003 18.0198 -0.0003 18.7988ZM9.2967 20.1388C8.6137 20.1388 8.2437 19.7558 8.2437 19.0718V9.2968C8.2437 8.6128 8.6137 8.2308 9.2967 8.2308H19.1137C19.7837 8.2308 20.1657 8.6128 20.1657 9.2968V19.0718C20.1657 19.7558 19.7837 20.1388 19.1137 20.1388ZM10.7737 17.3088C10.7737 17.4998 10.8827 17.6098 11.0607 17.6098H17.3357C17.5137 17.6098 17.6367 17.4998 17.6367 17.3088V11.0608C17.6367 10.8828 17.5137 10.7598 17.3357 10.7598H11.0607C10.8827 10.7598 10.7737 10.8828 10.7737 11.0608Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.84765625 28.84765625"
          className={className}
        >
          <path
            d="              M-0.0003 19.0583C-0.0003 19.8923 0.6567 20.5493 1.4767 20.5493H2.7067V24.7053C2.7067 25.5663 3.2817 26.1403 4.1427 26.1403H8.2987V27.3713C8.2987 28.2053 8.9417 28.8473 9.7757 28.8473C10.5957 28.8473 11.2517 28.2053 11.2517 27.3713V26.1403H12.9477V27.3713C12.9477 28.2053 13.6037 28.8473 14.4237 28.8473C15.2577 28.8473 15.9007 28.2053 15.9007 27.3713V26.1403H17.5957V27.3713C17.5957 28.2053 18.2517 28.8473 19.0727 28.8473C19.9067 28.8473 20.5487 28.2053 20.5487 27.3713V26.1403H24.7047C25.5667 26.1403 26.1407 25.5663 26.1407 24.7053V20.5353H27.3707C28.2047 20.5353 28.8477 19.8923 28.8477 19.0583C28.8477 18.2242 28.2047 17.5823 27.3707 17.5823H26.1407V15.8863H27.3707C28.2047 15.8863 28.8477 15.2303 28.8477 14.4103C28.8477 13.5763 28.2047 12.9332 27.3707 12.9332H26.1407V11.2383H27.3707C28.2047 11.2383 28.8477 10.5823 28.8477 9.7613C28.8477 8.9273 28.2047 8.2712 27.3707 8.2712H26.1407V4.1423C26.1407 3.2813 25.5667 2.7203 24.7047 2.7203H20.5487V1.4763C20.5487 0.6563 19.9067 0.0003 19.0727 0.0003C18.2517 0.0003 17.5957 0.6563 17.5957 1.4763V2.7203H15.9007V1.4763C15.9007 0.6563 15.2577 0.0003 14.4237 0.0003C13.6037 0.0003 12.9477 0.6563 12.9477 1.4763V2.7203H11.2517V1.4763C11.2517 0.6563 10.5957 0.0003 9.7757 0.0003C8.9417 0.0003 8.2987 0.6563 8.2987 1.4763V2.7203H4.1427C3.2817 2.7203 2.7067 3.2813 2.7067 4.1423V8.2853H1.4767C0.6567 8.2853 -0.0003 8.9273 -0.0003 9.7613C-0.0003 10.5953 0.6567 11.2383 1.4767 11.2383H2.7067V12.9332H1.4767C0.6567 12.9332 -0.0003 13.5903 -0.0003 14.4103C-0.0003 15.2443 0.6567 15.8863 1.4767 15.8863H2.7067V17.5823H1.4767C0.6567 17.5823 -0.0003 18.2383 -0.0003 19.0583ZM9.7067 20.1793C9.0507 20.1793 8.6677 19.7833 8.6677 19.1273V9.6933C8.6677 9.0373 9.0507 8.6543 9.7067 8.6543H19.1677C19.8107 8.6543 20.2067 9.0373 20.2067 9.6933V19.1273C20.2067 19.7833 19.8107 20.1793 19.1677 20.1793ZM11.5387 17.0213C11.5387 17.1853 11.6487 17.2953 11.8127 17.2953H17.0487C17.2127 17.2953 17.3357 17.1853 17.3357 17.0213V11.8123C17.3357 11.6483 17.2127 11.5253 17.0487 11.5253H11.8127C11.6487 11.5253 11.5387 11.6483 11.5387 11.8123Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.537109375 26.537109375"
          className={className}
        >
          <path
            d="              M-0.0003 17.9101C-0.0003 18.4021 0.3417 18.7581 0.8477 18.7581H2.3657V23.2421C2.3657 23.8161 2.7207 24.1721 3.2947 24.1721H7.7657V25.6891C7.7657 26.1951 8.1207 26.5371 8.6137 26.5371C9.1187 26.5371 9.4607 26.1951 9.4607 25.6891V24.1721H12.4277V25.6891C12.4277 26.1951 12.7697 26.5371 13.2617 26.5371C13.7677 26.5371 14.1097 26.1951 14.1097 25.6891V24.1721H17.0767V25.6891C17.0767 26.1951 17.4177 26.5371 17.9237 26.5371C18.4157 26.5371 18.7717 26.1951 18.7717 25.6891V24.1721H23.2427C23.8027 24.1721 24.1717 23.8161 24.1717 23.2421V18.7441H25.6897C26.1957 18.7441 26.5367 18.4021 26.5367 17.8961C26.5367 17.4041 26.1957 17.0491 25.6897 17.0491H24.1717V14.0961H25.6897C26.1957 14.0961 26.5367 13.7401 26.5367 13.2481C26.5367 12.7421 26.1957 12.4001 25.6897 12.4001H24.1717V9.4331H25.6897C26.1957 9.4331 26.5367 9.0921 26.5367 8.5991C26.5367 8.0941 26.1957 7.7521 25.6897 7.7521H24.1717V3.2951C24.1717 2.7341 23.8027 2.3651 23.2427 2.3651H18.7717V0.8481C18.7717 0.3551 18.4157 0.0001 17.9237 0.0001C17.4177 0.0001 17.0767 0.3551 17.0767 0.8481V2.3651H14.1097V0.8481C14.1097 0.3551 13.7677 0.0001 13.2617 0.0001C12.7697 0.0001 12.4277 0.3551 12.4277 0.8481V2.3651H9.4607V0.8481C9.4607 0.3551 9.1187 0.0001 8.6137 0.0001C8.1207 0.0001 7.7657 0.3551 7.7657 0.8481V2.3651H3.2947C2.7207 2.3651 2.3657 2.7341 2.3657 3.2951V7.7521H0.8477C0.3417 7.7521 -0.0003 8.1071 -0.0003 8.5991C-0.0003 9.1051 0.3417 9.4471 0.8477 9.4471H2.3657V12.4141H0.8477C0.3417 12.4141 -0.0003 12.7561 -0.0003 13.2621C-0.0003 13.7541 0.3417 14.0961 0.8477 14.0961H2.3657V17.0621H0.8477C0.3417 17.0621 -0.0003 17.4041 -0.0003 17.9101ZM7.7387 19.7281C7.1227 19.7281 6.8227 19.4141 6.8227 18.7991V7.7381C6.8227 7.1231 7.1227 6.8221 7.7387 6.8221H18.8127C19.4277 6.8221 19.7287 7.1231 19.7287 7.7381V18.7991C19.7287 19.4141 19.4277 19.7281 18.8127 19.7281ZM8.2847 17.9511C8.2847 18.1421 8.4087 18.2651 8.5997 18.2651H17.9517C18.1427 18.2651 18.2657 18.1421 18.2657 17.9511V8.5991C18.2657 8.4081 18.1427 8.2851 17.9517 8.2851H8.5997C8.4087 8.2851 8.2847 8.4081 8.2847 8.5991Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.822265625 27.822265625"
          className={className}
        >
          <path
            d="              M-0.0003 18.4567C-0.0003 19.1547 0.4927 19.6467 1.1897 19.6467H2.5567V24.1037C2.5567 24.8007 3.0217 25.2657 3.7187 25.2657H8.1617V26.6327C8.1617 27.3297 8.6547 27.8227 9.3517 27.8227C10.0487 27.8227 10.5407 27.3297 10.5407 26.6327V25.2657H12.7287V26.6327C12.7287 27.3297 13.2207 27.8227 13.9177 27.8227C14.6157 27.8227 15.1077 27.3297 15.1077 26.6327V25.2657H17.2817V26.6327C17.2817 27.3297 17.7737 27.8227 18.4707 27.8227C19.1677 27.8227 19.6597 27.3297 19.6597 26.6327V25.2657H24.1037C24.8007 25.2657 25.2657 24.8007 25.2657 24.1037V19.6327H26.6327C27.3297 19.6327 27.8227 19.1407 27.8227 18.4437C27.8227 17.7457 27.3297 17.2537 26.6327 17.2537H25.2657V15.0797H26.6327C27.3297 15.0797 27.8227 14.5877 27.8227 13.8907C27.8227 13.1937 27.3297 12.7007 26.6327 12.7007H25.2657V10.5137H26.6327C27.3297 10.5137 27.8227 10.0217 27.8227 9.3237C27.8227 8.6267 27.3297 8.1347 26.6327 8.1347H25.2657V3.7187C25.2657 3.0217 24.8007 2.5427 24.1037 2.5427H19.6597V1.1897C19.6597 0.4917 19.1677 -0.0003 18.4707 -0.0003C17.7737 -0.0003 17.2817 0.4917 17.2817 1.1897V2.5427H15.1077V1.1897C15.1077 0.4917 14.6157 -0.0003 13.9177 -0.0003C13.2207 -0.0003 12.7287 0.4917 12.7287 1.1897V2.5427H10.5407V1.1897C10.5407 0.4917 10.0487 -0.0003 9.3517 -0.0003C8.6547 -0.0003 8.1617 0.4917 8.1617 1.1897V2.5427H3.7187C3.0217 2.5427 2.5567 3.0217 2.5567 3.7187V8.1487H1.1897C0.4927 8.1487 -0.0003 8.6407 -0.0003 9.3377C-0.0003 10.0347 0.4927 10.5277 1.1897 10.5277H2.5567V12.7147H1.1897C0.4927 12.7147 -0.0003 13.2067 -0.0003 13.9047C-0.0003 14.6017 0.4927 15.0937 1.1897 15.0937H2.5567V17.2677H1.1897C0.4927 17.2677 -0.0003 17.7597 -0.0003 18.4567ZM8.8047 20.0837C8.0937 20.0837 7.7387 19.7287 7.7387 19.0037V8.8047C7.7387 8.0797 8.0937 7.7247 8.8047 7.7247H19.0447C19.7427 7.7247 20.1117 8.0797 20.1117 8.8047V19.0037C20.1117 19.7287 19.7427 20.0837 19.0447 20.0837ZM9.8297 17.6637C9.8297 17.8557 9.9667 17.9917 10.1587 17.9917H17.6777C17.8827 17.9917 18.0057 17.8557 18.0057 17.6637V10.1447C18.0057 9.9527 17.8827 9.8167 17.6777 9.8167H10.1587C9.9667 9.8167 9.8297 9.9527 9.8297 10.1447Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.5078125 27.5078125"
          className={className}
        >
          <path
            d="              M-0.0003 18.2793C-0.0003 18.9353 0.4377 19.3863 1.0937 19.3863H2.5017V23.9253C2.5017 24.5823 2.9397 25.0063 3.5957 25.0063H8.1207V26.4143C8.1207 27.0703 8.5727 27.5073 9.2287 27.5073C9.8847 27.5073 10.3227 27.0703 10.3227 26.4143V25.0063H12.6597V26.4143C12.6597 27.0703 13.0977 27.5073 13.7537 27.5073C14.4097 27.5073 14.8617 27.0703 14.8617 26.4143V25.0063H17.1857V26.4143C17.1857 27.0703 17.6227 27.5073 18.2797 27.5073C18.9497 27.5073 19.3867 27.0703 19.3867 26.4143V25.0063H23.9117C24.5687 25.0063 25.0057 24.5823 25.0057 23.9253V19.3733H26.4137C27.0707 19.3733 27.5077 18.9223 27.5077 18.2653C27.5077 17.6093 27.0707 17.1723 26.4137 17.1723H25.0057V14.8343H26.4137C27.0707 14.8343 27.5077 14.3963 27.5077 13.7403C27.5077 13.0843 27.0707 12.6323 26.4137 12.6323H25.0057V10.3083H26.4137C27.0707 10.3083 27.5077 9.8573 27.5077 9.2013C27.5077 8.5453 27.0707 8.1073 26.4137 8.1073H25.0057V3.5953C25.0057 2.9393 24.5687 2.5023 23.9117 2.5023H19.3867V1.1073C19.3867 0.4513 18.9497 0.0003 18.2797 0.0003C17.6227 0.0003 17.1857 0.4513 17.1857 1.1073V2.5023H14.8617V1.1073C14.8617 0.4513 14.4097 0.0003 13.7537 0.0003C13.0977 0.0003 12.6597 0.4513 12.6597 1.1073V2.5023H10.3227V1.1073C10.3227 0.4513 9.8847 0.0003 9.2287 0.0003C8.5727 0.0003 8.1207 0.4513 8.1207 1.1073V2.5023H3.5957C2.9397 2.5023 2.5017 2.9393 2.5017 3.5953V8.1213H1.0937C0.4377 8.1213 -0.0003 8.5583 -0.0003 9.2153C-0.0003 9.8713 0.4377 10.3223 1.0937 10.3223H2.5017V12.6463H1.0937C0.4377 12.6463 -0.0003 13.0973 -0.0003 13.7543C-0.0003 14.4103 0.4377 14.8473 1.0937 14.8473H2.5017V17.1853H1.0937C0.4377 17.1853 -0.0003 17.6233 -0.0003 18.2793ZM8.5317 20.0703C7.8067 20.0703 7.4517 19.7283 7.4517 18.9763V8.5313C7.4517 7.7933 7.8067 7.4513 8.5317 7.4513H19.0037C19.7287 7.4513 20.0707 7.7933 20.0707 8.5313V18.9763C20.0707 19.7283 19.7287 20.0703 19.0037 20.0703ZM9.3107 17.8693C9.3107 18.0743 9.4477 18.2113 9.6527 18.2113H17.8687C18.0877 18.2113 18.2107 18.0743 18.2107 17.8693V9.6523C18.2107 9.4333 18.0877 9.3103 17.8687 9.3103H9.6527C9.4477 9.3103 9.3107 9.4333 9.3107 9.6523Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.068359375 28.068359375"
          className={className}
        >
          <path
            d="              M-0.0003 18.6078C-0.0003 19.3318 0.5337 19.8648 1.2577 19.8648H2.5977V24.2398C2.5977 24.9788 3.0767 25.4708 3.8277 25.4708H8.1897V26.8108C8.1897 27.5348 8.7227 28.0688 9.4477 28.0688C10.1857 28.0688 10.7047 27.5348 10.7047 26.8108V25.4708H12.7697V26.8108C12.7697 27.5348 13.3027 28.0688 14.0277 28.0688C14.7657 28.0688 15.2987 27.5348 15.2987 26.8108V25.4708H17.3637V26.8108C17.3637 27.5348 17.8827 28.0688 18.6207 28.0688C19.3457 28.0688 19.8787 27.5348 19.8787 26.8108V25.4708H24.2407C24.9927 25.4708 25.4707 24.9788 25.4707 24.2398V19.8518H26.8107C27.5347 19.8518 28.0687 19.3188 28.0687 18.5938C28.0687 17.8688 27.5347 17.3358 26.8107 17.3358H25.4707V15.2718H26.8107C27.5347 15.2718 28.0687 14.7388 28.0687 14.0138C28.0687 13.2888 27.5347 12.7558 26.8107 12.7558H25.4707V10.6918H26.8107C27.5347 10.6918 28.0687 10.1578 28.0687 9.4338C28.0687 8.7088 27.5347 8.1758 26.8107 8.1758H25.4707V3.8278C25.4707 3.0758 24.9927 2.5838 24.2407 2.5838H19.8787V1.2578C19.8787 0.5328 19.3457 -0.0002 18.6207 -0.0002C17.8827 -0.0002 17.3637 0.5328 17.3637 1.2578V2.5838H15.2987V1.2578C15.2987 0.5328 14.7657 -0.0002 14.0277 -0.0002C13.3027 -0.0002 12.7697 0.5328 12.7697 1.2578V2.5838H10.7047V1.2578C10.7047 0.5328 10.1857 -0.0002 9.4477 -0.0002C8.7227 -0.0002 8.1897 0.5328 8.1897 1.2578V2.5838H3.8277C3.0767 2.5838 2.5977 3.0758 2.5977 3.8278V8.1758H1.2577C0.5337 8.1758 -0.0003 8.7088 -0.0003 9.4468C-0.0003 10.1718 0.5337 10.7048 1.2577 10.7048H2.5977V12.7698H1.2577C0.5337 12.7698 -0.0003 13.2888 -0.0003 14.0278C-0.0003 14.7518 0.5337 15.2848 1.2577 15.2848H2.5977V17.3498H1.2577C0.5337 17.3498 -0.0003 17.8688 -0.0003 18.6078ZM9.0097 20.1118C8.3267 20.1118 7.9567 19.7418 7.9567 19.0448V9.0098C7.9567 8.3128 8.3267 7.9438 9.0097 7.9438H19.0727C19.7697 7.9438 20.1247 8.3128 20.1247 9.0098V19.0448C20.1247 19.7418 19.7697 20.1118 19.0727 20.1118ZM10.2407 17.5138C10.2407 17.7048 10.3637 17.8278 10.5547 17.8278H17.5277C17.7187 17.8278 17.8417 17.7048 17.8417 17.5138V10.5408C17.8417 10.3498 17.7187 10.2268 17.5277 10.2268H10.5547C10.3637 10.2268 10.2407 10.3498 10.2407 10.5408Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.251953125 25.251953125"
          className={className}
        >
          <path
            d="              M-0.0003 17.4039C-0.0003 17.6919 0.2187 17.9099 0.5057 17.9099H2.1877V22.3539C2.1877 22.7909 2.4477 23.0649 2.8987 23.0649H7.3007V24.7329C7.3007 25.0329 7.5197 25.2519 7.8067 25.2519C8.1077 25.2519 8.3267 25.0329 8.3267 24.7329V23.0649H12.1137V24.7329C12.1137 25.0329 12.3317 25.2519 12.6187 25.2519C12.9197 25.2519 13.1247 25.0329 13.1247 24.7329V23.0649H16.9257V24.7329C16.9257 25.0329 17.1447 25.2519 17.4317 25.2519C17.7187 25.2519 17.9377 25.0329 17.9377 24.7329V23.0649H22.3537C22.7907 23.0649 23.0647 22.7909 23.0647 22.3539V17.9099H24.7327C25.0337 17.9099 25.2517 17.6919 25.2517 17.4039C25.2517 17.1169 25.0337 16.8989 24.7327 16.8989H23.0647V13.0979H24.7327C25.0337 13.0979 25.2517 12.8789 25.2517 12.5919C25.2517 12.3049 25.0337 12.0859 24.7327 12.0859H23.0647V8.2849H24.7327C25.0337 8.2849 25.2517 8.0669 25.2517 7.7789C25.2517 7.4919 25.0337 7.2739 24.7327 7.2739H23.0647V2.8849C23.0647 2.4469 22.7907 2.1739 22.3537 2.1739H17.9377V0.5059C17.9377 0.2189 17.7187 -0.0001 17.4317 -0.0001C17.1447 -0.0001 16.9257 0.2189 16.9257 0.5059V2.1739H13.1247V0.5059C13.1247 0.2189 12.9197 -0.0001 12.6187 -0.0001C12.3317 -0.0001 12.1137 0.2189 12.1137 0.5059V2.1739H8.3267V0.5059C8.3267 0.2189 8.1077 -0.0001 7.8067 -0.0001C7.5197 -0.0001 7.3007 0.2189 7.3007 0.5059V2.1739H2.8987C2.4477 2.1739 2.1877 2.4469 2.1877 2.8849V7.2739H0.5057C0.2187 7.2739 -0.0003 7.4919 -0.0003 7.7789C-0.0003 8.0669 0.2187 8.2849 0.5057 8.2849H2.1877V12.0859H0.5057C0.2187 12.0859 -0.0003 12.3049 -0.0003 12.5919C-0.0003 12.8789 0.2187 13.0979 0.5057 13.0979H2.1877V16.8989H0.5057C0.2187 16.8989 -0.0003 17.1169 -0.0003 17.4039ZM6.6997 19.2639C6.2347 19.2639 5.9887 19.0179 5.9887 18.5529V6.6859C5.9887 6.2339 6.2347 5.9749 6.6997 5.9749H18.5667C19.0317 5.9749 19.2777 6.2339 19.2777 6.6859V18.5529C19.2777 19.0179 19.0317 19.2639 18.5667 19.2639ZM6.9317 18.0469C6.9317 18.2109 7.0407 18.3199 7.2047 18.3199H18.0607C18.2247 18.3199 18.3337 18.2109 18.3337 18.0469V7.1919C18.3337 7.0269 18.2247 6.9179 18.0607 6.9179H7.2047C7.0407 6.9179 6.9317 7.0269 6.9317 7.1919Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.58203125 24.595703125"
          className={className}
        >
          <path
            d="              M-0.0003 17.1578C-0.0003 17.3358 0.1507 17.4868 0.3277 17.4868H2.0917V21.9028C2.0917 22.2848 2.3107 22.5038 2.6937 22.5038H7.0687V24.2538C7.0687 24.4458 7.2187 24.5958 7.3967 24.5958C7.5877 24.5958 7.7387 24.4458 7.7387 24.2538V22.5038H11.9627V24.2538C11.9627 24.4458 12.1137 24.5958 12.2907 24.5958C12.4827 24.5958 12.6327 24.4458 12.6327 24.2538V22.5038H16.8577V24.2538C16.8577 24.4458 17.0077 24.5958 17.1857 24.5958C17.3637 24.5958 17.5277 24.4458 17.5277 24.2538V22.5038H21.9027C22.2717 22.5038 22.5037 22.2848 22.5037 21.9028V17.4868H24.2537C24.4317 17.4868 24.5817 17.3358 24.5817 17.1578C24.5817 16.9668 24.4317 16.8168 24.2537 16.8168H22.5037V12.5918H24.2537C24.4317 12.5918 24.5817 12.4418 24.5817 12.2638C24.5817 12.0718 24.4317 11.9218 24.2537 11.9218H22.5037V7.6968H24.2537C24.4317 7.6968 24.5817 7.5468 24.5817 7.3688C24.5817 7.1918 24.4317 7.0278 24.2537 7.0278H22.5037V2.6938C22.5037 2.3108 22.2717 2.0918 21.9027 2.0918H17.5277V0.3418C17.5277 0.1508 17.3637 -0.0002 17.1857 -0.0002C17.0077 -0.0002 16.8577 0.1508 16.8577 0.3418V2.0918H12.6327V0.3418C12.6327 0.1508 12.4827 -0.0002 12.2907 -0.0002C12.1137 -0.0002 11.9627 0.1508 11.9627 0.3418V2.0918H7.7387V0.3418C7.7387 0.1508 7.5877 -0.0002 7.3967 -0.0002C7.2187 -0.0002 7.0687 0.1508 7.0687 0.3418V2.0918H2.6937C2.3107 2.0918 2.0917 2.3108 2.0917 2.6938V7.0278H0.3277C0.1507 7.0278 -0.0003 7.1918 -0.0003 7.3688C-0.0003 7.5468 0.1507 7.6968 0.3277 7.6968H2.0917V11.9218H0.3277C0.1507 11.9218 -0.0003 12.0718 -0.0003 12.2638C-0.0003 12.4418 0.1507 12.5918 0.3277 12.5918H2.0917V16.8168H0.3277C0.1507 16.8168 -0.0003 16.9668 -0.0003 17.1578ZM6.1657 19.0448C5.7837 19.0448 5.5647 18.8128 5.5647 18.4438V6.1528C5.5647 5.7828 5.7837 5.5508 6.1657 5.5508H18.4437C18.8267 5.5508 19.0447 5.7828 19.0447 6.1528V18.4438C19.0447 18.8128 18.8267 19.0448 18.4437 19.0448ZM6.2347 18.1018C6.2347 18.2658 6.3437 18.3618 6.4937 18.3618H18.1157C18.2657 18.3618 18.3747 18.2658 18.3747 18.1018V6.4938C18.3747 6.3298 18.2657 6.2348 18.1157 6.2348H6.4937C6.3437 6.2348 6.2347 6.3298 6.2347 6.4938Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}