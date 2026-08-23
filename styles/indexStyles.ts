import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8F7FC',
  },

  container: {
    padding: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  headerContent: {
    flex: 1,
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  appName: {
    color: '#292438',
    fontSize: 24,
    fontWeight: '800',
  },

  subtitle: {
    color: '#777184',
    fontSize: 12,
    marginTop: 2,
    flexShrink: 1,
  },

  hero: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,

    shadowColor: '#6848F5',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 14,

    elevation: 6,
  },

  heroLabel: {
    color: '#ECE7FF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    lineHeight: 33,
    fontWeight: '800',
    marginTop: 10,
  },

  heroDescription: {
    color: '#ECE7FF',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },

  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 18,

    borderWidth: 1,
    borderColor: '#ECE9F3',

    shadowColor: '#33265B',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.06,
    shadowRadius: 12,

    elevation: 2,
  },

  label: {
    color: '#393346',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 8,
  },

  input: {
    minHeight: 52,
    paddingHorizontal: 14,

    backgroundColor: '#F8F7FB',

    borderWidth: 1,
    borderColor: '#E4E0EC',
    borderRadius: 14,

    color: '#2E2939',
    fontSize: 15,
  },

  textArea: {
    height: 100,
    paddingTop: 14,
    paddingBottom: 22,
  },

  counter: {
    color: '#9993A6',
    fontSize: 11,
    textAlign: 'right',
    marginTop: -18,
    marginRight: 10,
  },

  tones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  toneButton: {
    width: '48%',
    minHeight: 43,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#F8F7FB',

    borderWidth: 1,
    borderColor: '#E4E0EC',
    borderRadius: 13,
  },

  toneButtonSelected: {
    backgroundColor: '#EFEAFF',
    borderColor: '#8065ED',
  },

  toneText: {
    color: '#6F697A',
    fontSize: 13,
    fontWeight: '600',
  },

  toneTextSelected: {
    color: '#6044DE',
    fontWeight: '800',
  },

  generateButtonContainer: {
    marginTop: 22,
    borderRadius: 15,
    overflow: 'hidden',
  },

  generateButton: {
    minHeight: 55,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 9,
  },

  generateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  pressed: {
    opacity: 0.8,
  },

  result: {
    backgroundColor: '#FFFFFF',

    borderWidth: 1.5,
    borderColor: '#D8CEFF',
    borderRadius: 22,

    padding: 19,
    marginTop: 20,

    shadowColor: '#6044DE',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,

    elevation: 3,
  },

  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  aiBadge: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 5,

    backgroundColor: '#EFEAFF',

    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  aiBadgeText: {
    color: '#6044DE',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  shareButton: {
    width: 40,
    height: 40,

    borderRadius: 13,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#F2EEFF',
  },

  answer: {
    color: '#373141',
    fontSize: 16,
    lineHeight: 25,
    marginTop: 17,
  },

  warning: {
    color: '#8C8697',
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 13,
  },

  footer: {
    color: '#9892A2',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 24,
  },
});
