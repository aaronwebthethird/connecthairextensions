export const colors = {
  fake: '#123D35',
  fakeLight: '#1B5A4E',
  fakeLighter: '#257165',
  cream: '#F8F5F2',
  beigeLight: '#FDFCFB',
  textDark: '#1F1F1F',
  textMedium: '#5A5A5A',
  textLight: '#8A8A8A',
  borderLight: '#E5DDD5',
  gradientTeal: 'linear-gradient(135deg, #E8F4F2 0%, #D4E9E5 100%)',
} as const;

export const styles = {
  header: {
    color: colors.fake,
  },
  sectionBg: {
    backgroundColor: colors.cream,
  },
  ctaPrimary: {
    backgroundColor: colors.fake,
    color: 'white',
  },
  ctaSecondary: {
    backgroundColor: 'white',
    color: colors.fake,
    border: `2px solid ${colors.fake}`,
  },
  link: {
    color: colors.fakeLighter,
  },
  text: {
    color: colors.textMedium,
  },
} as const;
