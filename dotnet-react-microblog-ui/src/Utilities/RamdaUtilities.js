import * as R from "ramda";

export const isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);
export const isNotNil = R.compose(R.not, R.isNil);
