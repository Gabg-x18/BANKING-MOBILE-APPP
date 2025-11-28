import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const SUPABASE_URL = 'https://iyvoefekhmiqasemvars.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5dm9lZmVraG1pcWFzZW12YXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxODIzNTksImV4cCI6MjA3OTc1ODM1OX0.1e6Nb0AfzAkYPbI6kjY9iRIC4KyucQIn4bIlRSFD3Zw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY); 