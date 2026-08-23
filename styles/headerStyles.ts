import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8F7FC',
  },

  safeArea: {
    backgroundColor: '#6848F5',
  },

  header: {
    height: 68,
    paddingHorizontal: 20,

    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#4D31C9',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 10,

    elevation: 6,
  },

  icon: {
    width: 42,
    height: 42,

    borderRadius: 14,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,

    backgroundColor: 'rgba(255, 255, 255, 0.18)',

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },

  titleContent: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '800',
  },

  subtitle: {
    color: '#EDE8FF',
    fontSize: 11,
    marginTop: 2,
  },
});
