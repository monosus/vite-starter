import autoprefixer from 'autoprefixer';
import postcssCalc from 'postcss-calc';
import reporter from 'postcss-reporter';
import stylelint from 'stylelint';

export default {
  plugins: [
    stylelint({
      configFile: './lint-tools/.stylelintrc.json',
    }),
    autoprefixer(),
    postcssCalc(),
    reporter({
      clearReportedMessages: true,
    }),
  ],
};
