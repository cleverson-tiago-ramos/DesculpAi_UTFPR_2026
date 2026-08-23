import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F8F7FC',
  },

  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  title: {
    color: '#292431',
    fontSize: 22,
    fontWeight: '700',
  },

  description: {
    marginTop: 8,
    color: '#77717F',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },

  counter: {
    marginTop: 3,
    color: '#77717F',
    fontSize: 13,
  },

  clearText: {
    color: '#D14D72',
    fontSize: 14,
    fontWeight: '600',
  },

  list: {
    paddingBottom: 30,
  },

  card: {
    marginBottom: 14,
    padding: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8E5EF',
    borderRadius: 16,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#EEEAFE',
    borderRadius: 20,
  },

  badgeText: {
    color: '#6848F5',
    fontSize: 12,
    fontWeight: '700',
  },

  message: {
    color: '#35303D',
    fontSize: 15,
    lineHeight: 23,
  },

  divider: {
    height: 1,
    marginVertical: 14,
    backgroundColor: '#EEEAF2',
  },

  info: {
    color: '#625B6A',
    fontSize: 13,
    fontWeight: '600',
  },

  date: {
    marginTop: 4,
    color: '#99939F',
    fontSize: 12,
  },
});
