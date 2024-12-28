import autoprefixer from 'autoprefixer';
import postcssCalc from 'postcss-calc';
import reporter from 'postcss-reporter';
import stylelint from 'stylelint';

export default {
  plugins: [
    autoprefixer(),
    postcssCalc(),
    stylelint({
      configFile: './lint-tools/.stylelintrc.json',
    }),
    reporter({
      clearReportedMessages: true,
    }),
  ],
};
