import { MongoClient, ServerApiVersion } from 'mongodb';

// এনভায়রনমেন্ট ভেরিয়েবল থেকে কানেকশন স্ট্রিং এবং ডাটাবেজ নাম নেওয়া হচ্ছে
const uri = process.env.MONGODB_URI; 
const dbName = process.env.DBNAME;

// ডাটাবেজ কানেকশন অপশন সেট করা হচ্ছে (স্টেবল এপিআই ভার্সন ১)
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

// যদি এনভায়রনমেন্ট ভেরিয়েবল না থাকে তবে এরর থ্রো করবে
if (!process.env.MONGODB_URI) {
  throw new Error('দয়া করে .env.local ফাইলে MONGODB_URI যোগ করুন');
}

// ডেভেলপমেন্ট মোডে কানেকশন হ্যান্ডেল করা
if (process.env.NODE_ENV === 'development') {
  // ডেভেলপমেন্টে ফাইল সেভ করলে যেন বারবার নতুন কানেকশন তৈরি হয়ে ডাটাবেজ জ্যাম না হয়, 
  // তাই গ্লোবাল ভেরিয়েবল ব্যবহার করা হয়েছে।
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // প্রোডাকশন মোডে সরাসরি নতুন কানেকশন তৈরি করা হচ্ছে।
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

/**
 * dbConnect ফাংশন: এটি কল করলে সরাসরি কাঙ্ক্ষিত কালেকশন পাওয়া যাবে।
 * @param {string} cname - কালেকশনের নাম
 */
export const dbConnect = async (cname) => {
  // ডাটাবেজ কানেকশন সফল হওয়া পর্যন্ত অপেক্ষা করবে (await)
  const connectedClient = await clientPromise;
  // নির্দিষ্ট ডাটাবেজ এবং কালেকশন রিটার্ন করবে
  return connectedClient.db(dbName).collection(cname);
};