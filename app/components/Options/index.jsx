const TYPES = {
  category1: {
    logs: [
      { name: "Action A1", id: 101 },
      { name: "Action A2", id: 102 },
      { name: "Action A3", id: 103 },
      { name: "Action A4", id: 104 },
      { name: "Action A5", id: 105 },
      { name: "Action A6", id: 106 },
      { name: "Action A7", id: 107 },
      { name: "Action A8", id: 108 },
      { name: "Action A9", id: 109 },
    ],
  },
  category2: {
    logs: [
      { name: "Action B1", id: 201 },
      { name: "Action B2", id: 202 },
      { name: "Action B3", id: 203 },
      { name: "Action B4", id: 204 },
      { name: "Action B5", id: 205 },
      { name: "Action B6", id: 206 },
      { name: "Action B7", id: 207 },
      { name: "Action B8", id: 208 },
      { name: "Action B9", id: 209 },
      { name: "Action B10", id: 210 },
      { name: "Action B11", id: 211 },
    ],
  },
  category3: {
    logs: [
      { name: "Action C1", id: 301 },
      { name: "Action C2", id: 302 },
      { name: "Action C3", id: 303 },
      { name: "Action C4", id: 304 },
      { name: "Action C5", id: 305 },
      { name: "Action C6", id: 306 },
      { name: "Action C7", id: 307 },
      { name: "Action C8", id: 308 },
      { name: "Action C9", id: 309 },
      { name: "Action C10", id: 310 },
      { name: "Action C11", id: 311 },
      { name: "Action C12", id: 312 },
      { name: "Action C13", id: 313 },
      { name: "Action C14", id: 314 },
      { name: "Action C15", id: 315 },
      { name: "Action C16", id: 316 },
      { name: "Action C17", id: 317 },
      { name: "Action C18", id: 318 },
      { name: "Action C19", id: 319 },
      { name: "Action C20", id: 320 },
    ],
  },
  category4: {
    logs: [
      { name: "Action D1", id: 401 },
      { name: "Action D2", id: 402 },
      { name: "Action D3", id: 403 },
      { name: "Action D4", id: 404 },
      { name: "Action D5", id: 405 },
      { name: "Action D6", id: 406 },
      { name: "Action D7", id: 407 },
      { name: "Action D8", id: 408 },
    ],
  },
  category5: {
    logs: [
      { name: "Action E1", id: 501 },
      { name: "Action E2", id: 502 },
      { name: "Action E3", id: 503 },
      { name: "Action E4", id: 504 },
      { name: "Action E5", id: 505 },
      { name: "Action E6", id: 506 },
      { name: "Action E7", id: 507 },
      { name: "Action E8", id: 508 },
      { name: "Action E9", id: 509 },
      { name: "Action E10", id: 510 },
      { name: "Action E11", id: 511 },
      { name: "Action E12", id: 512 },
      { name: "Action E13", id: 513 },
    ],
  },
  category6: {
    logs: [
      { name: "Action F1", id: 601 },
      { name: "Action F2", id: 602 },
      { name: "Action F3", id: 603 },
      { name: "Action F4", id: 604 },
    ],
  },
  category7: {
    logs: [
      { name: "Action G1", id: 701 },
      { name: "Action G2", id: 702 },
      { name: "Action G3", id: 703 },
      { name: "Action G4", id: 704 },
      { name: "Action G5", id: 705 },
    ],
  },
  category8: {
    logs: [
      { name: "Action H1", id: 801 },
      { name: "Action H2", id: 802 },
      { name: "Action H3", id: 803 },
      { name: "Action H4", id: 804 },
      { name: "Action H5", id: 805 },
      { name: "Action H6", id: 806 },
      { name: "Action H7", id: 807 },
      { name: "Action H8", id: 808 },
      { name: "Action H9", id: 809 },
      { name: "Action H10", id: 810 },
      { name: "Action H11", id: 811 },
    ],
  },
  category9: {
    logs: [
      { name: "Action I1", id: 901 },
      { name: "Action I2", id: 902 },
      { name: "Action I3", id: 903 },
      { name: "Action I4", id: 904 },
      { name: "Action I5", id: 905 },
    ],
  },
};

export const options = () => {
  const categories = Object.keys(TYPES);
  let finalList = [];

  for (const category of categories) {
    for (let i = 0; i < TYPES[category].logs.length; i++) {
      finalList.push({
        extraText: category,
        label: TYPES[category].logs[i].name,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" />
            <path d="m16 2 6 6" />
            <path d="M12 16H4" />
          </svg>
        ),
      });
    }
  }

  return finalList;
};
